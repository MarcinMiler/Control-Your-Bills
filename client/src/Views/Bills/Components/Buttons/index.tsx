import * as React from 'react'

import { Dropdown } from 'src/Components/Dropdown'
import { Modal } from 'src/Components/Modal'
import { Container, Button, PlusIcon } from './style'
import { AddBillContainer } from '../AddBill'

const items = ['Date', 'Price low', 'Price up']

interface State {
    isOpenModal: boolean
}

export class Buttons extends React.Component<{}, State> {
    public readonly state = {
        isOpenModal: true
    }

    private handleClose = () => this.setState({ isOpenModal: false })

    private open = () => this.setState({ isOpenModal: true })

    public render() {
        const { isOpenModal } = this.state

        return (
            <Container>
                <Button onClick={() => this.open()}>
                    Add bill
                    <PlusIcon />
                </Button>

                <Dropdown items={items} />

                {isOpenModal && (
                    <Modal handleClose={this.handleClose}>
                        <AddBillContainer />
                    </Modal>
                )}
            </Container>
        )
    }
}
