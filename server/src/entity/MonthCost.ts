import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne
} from 'typeorm'
import { Category } from './Category'

@Entity()
export class MonthCost extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    date: Date

    @Column()
    cost: number

    @Column()
    categoryId: number

    @ManyToOne(() => Category, category => category.monthCost)
    category: Category
}
