import {
    Entity,
    Column,
    BaseEntity,
    PrimaryGeneratedColumn,
    BeforeInsert,
    OneToMany
} from 'typeorm'
import * as bcrypt from 'bcryptjs'

import { Bill } from './Bills'

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column()
    password: string

    @OneToMany(() => Bill, bill => bill.user)
    bills: Bill[]

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10)
    }
}
