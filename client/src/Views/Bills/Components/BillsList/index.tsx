import * as React from 'react'
import * as _ from 'lodash'

import { BillsListUI } from './BillsList'
import { FindCategory } from 'src/graphql/category'
import { withRouter, RouteComponentProps } from 'react-router'

const invertDirection = {
    asc: 'desc',
    desc: 'asc'
}

interface State {
    columnToSort: string
    sortDirection: string
}

class C extends React.Component<RouteComponentProps<{ id: string }>, State> {
    public readonly state = {
        columnToSort: '',
        sortDirection: 'desc'
    }

    private handleSort = (columnName: string) =>
        this.setState(({ sortDirection, columnToSort }) => ({
            columnToSort: columnName,
            sortDirection:
                columnToSort === columnName
                    ? invertDirection[sortDirection]
                    : 'asc'
        }))

    public render() {
        const { columnToSort, sortDirection } = this.state
        const {
            match: {
                params: { id }
            }
        } = this.props

        return (
            <FindCategory id={id}>
                {data => {
                    if (data.loading || !data.category) {
                        return <div>loading...</div>
                    }

                    return (
                        <BillsListUI
                            bills={_.orderBy(
                                data.category.bills,
                                columnToSort,
                                sortDirection
                            )}
                            handleSort={this.handleSort}
                        />
                    )
                }}
            </FindCategory>
        )
    }
}

export const BillsList = withRouter(C)
