import * as React from 'react'
import { Container } from './style'

interface Props {
    onClick?: () => void
    text: string
    type?: string
}

export const Button: React.SFC<Props> = ({ onClick, text, type }) => (
    <Container onClick={onClick} type={type}>
        {text}
    </Container>
)
