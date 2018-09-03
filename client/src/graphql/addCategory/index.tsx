import * as React from 'react'
import gql from 'graphql-tag'
import { MutationFn, Mutation } from 'react-apollo'

import {
    CreateCategoryMutation,
    CreateCategoryMutationVariables
} from 'src/schemaTypes'
import { CATEGORIES_QUERY } from '../categories'

const mutation = gql`
    mutation CreateCategoryMutation($name: String!) {
        createCategory(name: $name) {
            id
            name
            billsCount
        }
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
                update={(cache, data) => {
                    if (!data.data) {
                        return
                    }
                    const lol: any = cache.readQuery({
                        query: CATEGORIES_QUERY
                    })
                    cache.writeQuery({
                        query: CATEGORIES_QUERY,
                        data: {
                            categories: lol.categories.concat([
                                data.data.createCategory
                            ])
                        }
                    })
                }}
            >
                {mutate => children({ createCategory: mutate })}
            </Mutation>
        )
    }
}
