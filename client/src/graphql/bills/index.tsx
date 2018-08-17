import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import { BillsQuery_bills, BillsQuery } from 'src/schemaTypes'

const billsQuery = gql`
    query BillsQuery {
        bills {
            id
            title
            date
            price
        }
    }
`
export interface WithBills {
    bills: BillsQuery_bills[]
    loading: boolean
}

export const withBills = graphql<any, BillsQuery, {}, WithBills>(billsQuery, {
    props: ({ data }) => {
        let bills: BillsQuery_bills[] = []

        if (data && !data.loading && data.bills) {
            bills = data.bills
        }

        return {
            bills,
            loading: data ? data.loading : false
        }
    }
})
