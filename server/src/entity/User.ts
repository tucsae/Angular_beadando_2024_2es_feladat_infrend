import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { UserDTO } from "../../../models"
import { Item } from "./Item"

@Entity()
export class User implements UserDTO {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    phone: string;

    @Column()
    personalIdNumber: string;

    @Column()
    address: string;

    @Column()
    isActive:boolean;

    @OneToMany(() => User, user => user.borrowedItems)
    borrowedItems: Item[];

    @Column()
    email: string;

    @Column({ select: false })
    password: string;
}
