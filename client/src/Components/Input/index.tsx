import * as React from 'react'
import { Container, Label, StyledInput } from './style'

interface Props {
    onChange: () => void
    label: string
    type: string
}

export const Input: React.SFC<Props> = ({ onChange, label, type }) => (
    <Container>
        <Label>{label}</Label>
        <StyledInput onChange={onChange} type={type} />
    </Container>
)
