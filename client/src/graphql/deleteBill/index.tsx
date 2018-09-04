import * as React from 'react'
import gql from 'graphql-tag'
import { Mutation, MutationFn } from 'react-apollo'

import {
    DeleteBillMutation,
    DeleteBillMutationVariables
} from 'src/schemaTypes'

const mutation = gql`
    mutation DeleteBillMutation($id: ID!) {
        deleteBill(id: $id)
    }
`

interface WithDeleteBill {
    deleteBill: MutationFn<DeleteBillMutation, DeleteBillMutationVariables>
}

interface Props {
    children: (data: WithDeleteBill) => React.ReactNode | null
}

export class MutationDeleteBill extends React.PureComponent<Props> {
    public render() {
        const { children } = this.props

        return (
            <Mutation<DeleteBillMutation, DeleteBillMutationVariables>
                mutation={mutation}
            >
                {mutate => children({ deleteBill: mutate })}
            </Mutation>
        )
    }
}
