import { ResolverMap } from '../../../types/resolverMap'
import { Category } from '../../../entity/Category'

export const resolver: ResolverMap = {
    Mutation: {
        createCategory: async (_, { name }) => {
            const newCategory = await Category.create({
                name,
                userId: 1
            }).save()
            newCategory.billsCount = 0

            return newCategory
        }
    }
}
