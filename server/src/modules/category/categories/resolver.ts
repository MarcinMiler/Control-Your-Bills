import { ResolverMap } from '../../../types/resolverMap'
import { Category } from '../../../entity/Category'

export const resolver: ResolverMap = {
    Query: {
        categories: () =>
            Category.find({
                where: { userId: 1 },
                relations: ['bills', 'monthCost']
            })
    }
}
