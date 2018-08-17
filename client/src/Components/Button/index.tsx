import * as React from 'react'
import { Container } from './style'

interface Props {
    onClick: () => void
    text: string
}

export const Button: React.SFC<Props> = ({ onClick, text }) => (
    <Container onClick={onClick}>{text}</Container>
)
