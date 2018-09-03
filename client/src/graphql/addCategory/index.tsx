import * as React from 'react'
import gql from 'graphql-tag'
import { MutationFn, Mutation } from 'react-apollo'
import {
    CreateCategoryMutation,
    CreateCategoryMutationVariables
} from '../../schemaTypes'

const mutation = gql`
    mutation CreateCategoryMutation($name: String!) {
        createCategory(name: $name)
    }
`
interface WithCreateCategory {
    createCategory: MutationFn<
        CreateCategoryMutation,
        CreateCategoryMutationVariables
    >
}

interface Props {
    children: (data: WithCreateCategory) => React.ReactNode | null
}

export class CreateCategory extends React.PureComponent<Props> {
    public render() {
        const { children } = this.props
        return (
            <Mutation<CreateCategoryMutation, CreateCategoryMutationVariables>
                mutation={mutation}
            >
                {mutate => children({ createCategory: mutate })}
            </Mutation>
        )
    }
}
