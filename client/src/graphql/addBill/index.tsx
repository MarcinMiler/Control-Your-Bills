import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import { AddBillMutationVariables, AddBillMutation } from '../../schemaTypes'

export const addBillMutation = gql`
    mutation AddBillMutation($title: String!, $price: Int!) {
        addBill(input: { title: $title, price: $price }) {
            id
            title
            date
            price
        }
    }
`
export interface WithAddBill {
    addBill: (variables: AddBillMutationVariables) => void
}

export const withAddBill = graphql<
    any,
    AddBillMutation,
    AddBillMutationVariables,
    WithAddBill
>(addBillMutation, {
    props: ({ mutate }) => ({
        addBill: async variables => {
            if (!mutate) {
                return
            }

            const lol = await mutate({ variables })
            console.log(lol)
        }
    }),
    options: {
        refetchQueries: ['bills']
    }
})