import { ResolverMap } from '../../../types/resolverMap'
import { Category } from '../../../entity/Category'
import { MonthCost } from '../../../entity/MonthCost'

export const resolver: ResolverMap = {
    Mutation: {
        createCategory: async (_, { name }) => {
            const newCategory = await Category.create({
                name,
                userId: 1
            }).save()
            newCategory.billsCount = 0

            await MonthCost.create({
                date: new Date(),
                cost: 0,
                categoryId: newCategory.id
            }).save()

            return newCategory
        }
    }
}
