import * as moment from 'moment'

import { ResolverMap } from '../../../types/resolverMap'
import { Bill } from '../../../entity/Bills'
import { MonthCost } from '../../../entity/MonthCost'

export const resolver: ResolverMap = {
    Mutation: {
        addBill: async (_, { input: { categoryId, price, ...rest } }) => {
            try {
                const monthCost = await MonthCost.findOne(categoryId)

                if (monthCost) {
                    const isSameMonth = moment().isSame(monthCost.date, 'month')

                    if (!isSameMonth) {
                        await MonthCost.create({
                            categoryId,
                            cost: price,
                            date: new Date()
                        })
                    }

                    await MonthCost.update(categoryId, {
                        cost: monthCost.cost + price
                    })
                }

                return await Bill.create({
                    ...rest,
                    categoryId,
                    price,
                    userId: 1
                }).save()
            } catch (err) {
                return null
            }
        }
    }
}
