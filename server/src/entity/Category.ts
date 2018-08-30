import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    ManyToOne
} from 'typeorm'
import { Bill } from './Bills'
import { User } from './User'

@Entity()
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    userId: number

    @ManyToOne(() => User, user => user.categories)
    user: User

    @OneToMany(() => Bill, bill => bill.category)
    bills: Bill[]
}
