import { ResolverMap } from '../../../types/resolverMap'
import { Bill } from '../../../entity/Bills'

export const resolver: ResolverMap = {
    Mutation: {
        deleteBill: async (_, { id }) => {
            try {
                await Bill.delete(id)
                return true
            } catch (err) {
                console.log(err)
                return false
            }
        }
    }
}
