import * as React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import { CategoriesQuery_categories, CategoriesQuery } from 'src/schemaTypes'

export const CATEGORIES_QUERY = gql`
    query CategoriesQuery {
        categories {
            id
            name
            billsCount
        }
    }
`

export interface WithCategories {
    categories: CategoriesQuery_categories[]
    loading: boolean
}

interface Props {
    children: (data: WithCategories) => React.ReactNode | null
}

export class FindCategories extends React.PureComponent<Props> {
    public render() {
        const { children } = this.props
        return (
            <Query<CategoriesQuery>
                query={CATEGORIES_QUERY}
                fetchPolicy="cache-and-network"
            >
                {({ data, loading }) => {
                    let categories: CategoriesQuery_categories[] = []

                    if (data && data.categories) {
                        categories = data.categories
                    }

                    return children({
                        categories,
                        loading
                    })
                }}
            </Query>
        )
    }
}
