import express from 'express';
import { ItemController } from './controller/item.controller';
import { UserController } from './controller/user.controller';
import { checkUser } from './protect-routes';

export function getRoutes() {
    const router = express.Router();

    const itemController = new ItemController();
    router.get('/items', itemController.getAll);
    router.post('/items', checkUser, itemController.create);
    router.put('/items', checkUser, itemController.update);
    router.get('/items/available', itemController.getAvailableItems);
    router.get('/items/loaned', itemController.getLoanedItems);
    router.post('/items/borrow', checkUser, itemController.borrowItem);
    router.post('/items/return', itemController.returnItem);
    router.get('/items/late', itemController.getLateItems);
    router.get('/items/:id', itemController.getOne);
    router.delete('/items/:id', checkUser, itemController.delete);

    const userController = new UserController();
    router.get('/users', userController.getAll);
    router.get('/users/:id', userController.getOne);
    router.post('/users', userController.create);
    router.put('/users', checkUser, userController.update);
    router.delete('/users/:id', checkUser, userController.delete);
    router.post('/users/login', userController.login);

    return router;
}
