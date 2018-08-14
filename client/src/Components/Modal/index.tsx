import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Container, Content, CloseIcon } from './style'

const modalRoot = document.getElementById('modal-root')

interface Props {
    handleClose: () => void
}

export class Modal extends React.Component<Props> {
    public render() {
        const { children, handleClose } = this.props
        return (
            modalRoot &&
            ReactDOM.createPortal(
                <Container>
                    <Content>
                        <CloseIcon onClick={handleClose} />
                        {children}
                    </Content>
                </Container>,
                modalRoot
            )
        )
    }
}
