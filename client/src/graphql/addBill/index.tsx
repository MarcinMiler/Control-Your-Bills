import * as React from 'react'
import { Mutation, MutationFn } from 'react-apollo'
import gql from 'graphql-tag'

import { AddBillMutation, AddBillMutationVariables } from 'src/schemaTypes'

export const mutation = gql`
    mutation AddBillMutation($title: String!, $price: Int!, $categoryId: ID!) {
        addBill(
            input: { title: $title, price: $price, categoryId: $categoryId }
        ) {
            id
            title
            date
            price
        }
    }
`
interface WithAddBill {
    addBill: MutationFn<AddBillMutation, AddBillMutationVariables>
}

interface Props {
    children: (data: WithAddBill) => React.ReactNode | null
}

export class MutationAddBill extends React.PureComponent<Props> {
    public render() {
        const { children } = this.props

        return (
            <Mutation<AddBillMutation, AddBillMutationVariables>
                mutation={mutation}
            >
                {mutate => children({ addBill: mutate })}
            </Mutation>
        )
    }
}
