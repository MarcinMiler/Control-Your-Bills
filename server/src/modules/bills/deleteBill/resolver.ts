import { ResolverMap } from '../../../types/resolverMap'
import { Bill } from '../../../entity/Bills'

export const resolver: ResolverMap = {
    Mutation: {
        deleteBill: async (_, { id }) => {
            try {
                await Bill.remove(id)
                return true
            } catch (err) {
                return false
            }
        }
    }
}
