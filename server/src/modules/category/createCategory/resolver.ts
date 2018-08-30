import { ResolverMap } from '../../../types/resolverMap'
import { Category } from '../../../entity/Category'

export const resolver: ResolverMap = {
    Mutation: {
        createCategory: async (_, { name }) => {
            try {
                await Category.create({ name, userId: 1 }).save()
                return true
            } catch (err) {
                return false
            }
        }
    }
}
