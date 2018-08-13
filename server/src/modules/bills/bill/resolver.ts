import { ResolverMap } from '../../../types/resolverMap'

import { Bill } from '../../../entity/Bills'

export const resolver: ResolverMap = {
    Query: {
        bill: (_, { id }) => Bill.findOne(id, { relations: ['user'] })
    }
}
