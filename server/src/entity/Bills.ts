import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    BeforeInsert
} from 'typeorm'

import { User } from './User'

@Entity()
export class Bill extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    date: Date

    @Column()
    price: number

    @Column()
    userId: number

    @ManyToOne(() => User, user => user.bills)
    user: User

    @BeforeInsert()
    generateDate() {
        this.date = new Date()
    }
}
