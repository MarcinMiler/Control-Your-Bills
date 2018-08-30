import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    BeforeInsert
} from 'typeorm'

import { Category } from './Category'

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
    categoryId: number

    @ManyToOne(() => Category, category => category.bills)
    category: Category

    @BeforeInsert()
    generateDate() {
        this.date = new Date()
    }
}
