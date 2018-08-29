import * as React from 'react'

import { Modal } from 'src/Components/Modal'
import { AddBillContainer } from '../AddBill'
import { Container, Button, PlusIcon } from './style'

interface State {
    isOpenModal: boolean
}

export class Buttons extends React.Component<{}, State> {
    public readonly state = {
        isOpenModal: false
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

                {isOpenModal && (
                    <Modal handleClose={this.handleClose}>
                        <AddBillContainer />
                    </Modal>
                )}
            </Container>
        )
    }
}
