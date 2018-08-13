import { ResolverMap } from '../../../types/resolverMap'

import { Bill } from '../../../entity/Bills'

export const resolver: ResolverMap = {
    Mutation: {
        addBill: async (_, { input }, { userId }) => {
            try {
                await Bill.create({ ...input, userId }).save()

                return true
            } catch (err) {
                return false
            }
        }
    }
}
