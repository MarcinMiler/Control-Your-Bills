import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router'

import { FindCategories } from 'src/graphql/categories'
import { CategoriesUI } from './Categories'

class C extends React.Component<RouteComponentProps<{ id: string }>, {}> {
    public render() {
        const {
            history: { push }
        } = this.props
        return (
            <FindCategories>
                {data => {
                    if (data.loading) {
                        return <div>loading...</div>
                    }

                    return (
                        <CategoriesUI
                            categories={data.categories}
                            push={push}
                        />
                    )
                }}
            </FindCategories>
        )
    }
}

export const Categories = withRouter(C)
