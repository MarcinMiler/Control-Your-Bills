import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import { CategoriesQuery_categories, CategoriesQuery } from '../../schemaTypes'

export const categoriesQuery = gql`
    query CategoriesQuery {
        categories {
            id
            name
            billsCount
            bills {
                id
                title
                date
                price
            }
        }
    }
`
export interface WithCategories {
    categories: CategoriesQuery_categories[]
    loading: boolean
}

export const withCategories = graphql<any, CategoriesQuery, {}, WithCategories>(
    categoriesQuery,
    {
        props: ({ data }) => {
            let categories: CategoriesQuery_categories[] = []

            if (data && !data.loading && data.categories) {
                categories = data.categories
            }

            return {
                categories,
                loading: data ? data.loading : false
            }
        }
    }
)
