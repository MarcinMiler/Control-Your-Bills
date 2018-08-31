import * as React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import {
    CategoryQuery_category,
    CategoryQuery,
    CategoryQueryVariables
} from 'src/schemaTypes'

const query = gql`
    query CategoryQuery($id: ID!) {
        category(id: $id) {
            bills {
                id
                title
                date
                price
            }
        }
    }
`

export interface WithCategory {
    category: CategoryQuery_category | null
    loading: boolean
}

interface Props {
    id: string
    children: (data: WithCategory) => React.ReactNode | null
}

export class FindCategory extends React.PureComponent<Props> {
    public render() {
        const { children, id } = this.props
        return (
            <Query<CategoryQuery, CategoryQueryVariables>
                query={query}
                variables={{ id }}
            >
                {({ data, loading }) => {
                    let category: CategoryQuery_category | null = null

                    if (data && data.category) {
                        category = data.category
                    }

                    return children({
                        category,
                        loading
                    })
                }}
            </Query>
        )
    }
}
