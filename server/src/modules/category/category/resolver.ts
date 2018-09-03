import { ResolverMap } from '../../../types/resolverMap'
import { Category } from '../../../entity/Category'

export const resolver: ResolverMap = {
    Query: {
        category: (_, { id }) => Category.findOne(id, { relations: ['bills'] })
    }
}
