import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne
} from 'typeorm'

import { User } from './User'

@Entity()
export class Bill extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    date: string

    @Column()
    contract: boolean

    @Column()
    price: number

    @ManyToOne(() => User, user => user.bills)
    user: User
}
