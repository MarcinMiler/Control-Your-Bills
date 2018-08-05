import * as React from 'react'
import { Container, PlusIcon } from './style'

interface Props {
    onClick: () => void
}

export const Button: React.SFC<Props> = ({ onClick }) => (
    <Container onClick={onClick}>
        <PlusIcon />
    </Container>
)
