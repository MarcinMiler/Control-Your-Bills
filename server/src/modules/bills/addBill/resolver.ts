import { ResolverMap } from '../../../types/resolverMap'

import { Bill } from '../../../entity/Bills'

export const resolver: ResolverMap = {
    Mutation: {
        addBill: async (_, { input }) => {
            try {
                return await Bill.create({
                    ...input,
                    userId: 1,
                    categoryId: 1
                }).save()
            } catch (err) {
                return null
            }
        }
    }
}
