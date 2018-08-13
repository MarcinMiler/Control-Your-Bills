import { ResolverMap } from '../../../types/resolverMap'

import { Bill } from '../../../entity/Bills'

export const resolver: ResolverMap = {
    Query: {
        bills: () => Bill.find({ relations: ['user'] })
    }
}
