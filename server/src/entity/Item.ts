import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ItemDTO } from '../../../models';
import { User } from './User';

@Entity()
export class Item implements ItemDTO {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true, type: 'text'})
    title: string;

    @Column({nullable: true, type: 'text'})
    category: string;

    @Column({nullable: true, type: 'text' })
    Author: string;

    @Column({nullable: true, type: 'date' })
    date: string;

    @Column({nullable: true, type: 'date' })
    borrowDate: Date;

    @Column({nullable: true, type: 'text' })
    status: string;

    @ManyToOne(() => User, user => user.borrowedItems, {eager:true})
    borrower: User;

}