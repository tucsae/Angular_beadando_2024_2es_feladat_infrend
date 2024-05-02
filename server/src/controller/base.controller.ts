import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { LateItemDTO } from "../../../models";
import { User } from "../entity/User";
import { Item } from "../entity/Item";

export abstract class Controller {
    repository: Repository<any>;

    getAll = async (req, res) => {
        try {
            const entities = await this.repository.find();
            res.json(entities);
        } catch (err) {
            this.handleError(res, err);
        }
    };

    getOne = async (req, res) => {
        try {
            const id = req.params.id;
            const entity = await this.repository.findOneBy({ id: id });
            if (!entity) {
                return this.handleError(res, null, 404, 'Not found.');
            }

            res.json(entity);
        } catch (err) {
            this.handleError(res, err);
        }
    };

    create = async (req, res) => {
        try {
            const entity = this.repository.create(req.body as object);
            entity.id = null;

            const result = await this.repository.save(entity);

            res.json(result);
        } catch (err) {
            this.handleError(res, err);
        }
    };

    update = async (req, res) => {
        try {
            const entity = this.repository.create(req.body as object);
            const entityToUpdate = await this.repository.findOneBy({ id: entity.id });
            if (!entityToUpdate) {
                return this.handleError(res, null, 404, 'Not found.');
            }

            const result = await this.repository.save(entity);
            res.json(result);
        } catch (err) {
            this.handleError(res, err);
        }
    };

    delete = async (req, res) => {
        try {
            const entityToDelete = await this.repository.findOneBy({
                id: req.params.id
            });

            if (!entityToDelete) {
                return this.handleError(res, null, 404, 'Not found.');
            }

            await this.repository.remove(entityToDelete);
            res.status(200).send();
        } catch (err) {
            this.handleError(res, err);
        }
    };

    handleError(res, err = null, status = 500, message = 'Unexpected server error') {
        if (err) {
            console.error(err);
        }

        res.status(status);
        res.json({ error: message });
    }

    getAvailableItems = async (req, res) => {
        try {
            const items = await this.repository.find({ where: { status: 'available' } });
            res.json(items);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving available items' });
        }
    };

    getLoanedItems = async (req, res) => {
        try {
            const items = await this.repository.find({ where: { status: 'loaned' } });
            res.json(items);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving loaned items' });
        }
    };

    borrowItem = async (req, res) => {
        try {

            const { userId, itemId } = req.body;

            const user: User = await this.repository.findOneBy({ id: userId });
            const item: Item = await this.repository.findOneBy({ id: itemId });

            if (!user || !item) {
                return res.status(404).json({ message: 'User or item not found' });
            }

            user.borrowedItems = await AppDataSource.getRepository(Item).findBy({ borrower: { id: req.auth.id } })

            if (user.borrowedItems.length >= 6) {
                return res.status(400).json({ message: 'User has reached the maximum limit of borrowed items' });
            }

            item.status = 'loaned';
            item.borrower = user;
            item.borrowDate = new Date();

            user.borrowedItems.push(item);

            await this.repository.save(user);
            await this.repository.save(item);

            res.json({ message: 'Item borrowed successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error borrowing item' });
        }
    };

    returnItem = async (req, res) => {
        try {
            const { userId, itemId } = req.body;

            const user: User = await this.repository.findOneBy({id: userId});
            const item: Item = await this.repository.findOneBy({id: itemId});

            if (!user || !item) {
                return res.status(404).json({ message: 'User or item not found' });
            }

            item.status = 'available';
            item.borrowDate = null;
            item.borrower = null;

            await this.repository.save(user);
            await this.repository.save(item);

            res.json({ message: 'item returned successfully' });
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Error returning item' });
        }
    };

    getLateItems = async (req, res) => {
        try {
            const lateDays = 30;
            const lateDate = new Date(Date.now() - lateDays * 86400000);
            
            const lateitems: LateItemDTO[] = await this.repository
                .createQueryBuilder('item')
                .leftJoinAndSelect('item.borrower', 'user')
                .where('item.status = :status', { status: 'loaned' })
                .andWhere('item.borrowDate <= :dueDate', { dueDate: lateDate.toISOString() })
                .getMany();

                lateitems.forEach(item => {
                    const borrowDate = new Date(item.borrowDate);
                    const currentDate = new Date();
                    const delay = Math.floor((currentDate.getTime() - borrowDate.getTime()) / 86400000);
                    item.delay = delay - lateDays;
                });

            res.json(lateitems);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving late items' });
        }
    };

}