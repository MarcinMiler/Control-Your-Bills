import * as React from 'react'
import * as _ from 'lodash'

import { withBills, WithBills } from 'src/graphql/bills'
import { BillsListUI } from './BillsList'

const invertDirection = {
    asc: 'desc',
    desc: 'asc'
}

interface State {
    columnToSort: string
    sortDirection: string
}

class C extends React.Component<WithBills, State> {
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
        const { bills, ...rest } = this.props

        return (
            <BillsListUI
                bills={_.orderBy(bills, columnToSort, sortDirection)}
                handleSort={this.handleSort}
                {...rest}
            />
        )
    }
}

export const BillsList = withBills(C)
