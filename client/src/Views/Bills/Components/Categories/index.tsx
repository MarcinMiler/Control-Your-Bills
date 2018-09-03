import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router'

import { FindCategories } from 'src/graphql/categories'
import { CategoriesUI } from './Categories'

interface State {
    isOpen: boolean
}

class C extends React.Component<RouteComponentProps<{ id: string }>, State> {
    public readonly state = {
        isOpen: false
    }

    private toggleModal = () =>
        this.setState(({ isOpen }) => ({ isOpen: !isOpen }))

    public render() {
        const { isOpen } = this.state
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
                            isOpen={isOpen}
                            toggleModal={this.toggleModal}
                            push={push}
                        />
                    )
                }}
            </FindCategories>
        )
    }
}

export const Categories = withRouter(C)
