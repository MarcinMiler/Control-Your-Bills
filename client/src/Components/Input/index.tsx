import * as React from 'react'
import { FieldProps } from 'formik'

import { Container, Label, StyledInput, ErrorMessage } from './style'

interface Props {
    label: string
}

export const Input: React.SFC<FieldProps<any> & Props> = ({
    field: { onChange, ...field },
    form: { errors, touched },
    label,
    ...props
}) => {
    const errorMsg = touched[field.name] && errors[field.name]
    return (
        <Container>
            <Label>{label}</Label>
            <StyledInput
                onChange={onChange}
                error={!!errorMsg}
                {...field}
                {...props}
            />
            {errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
        </Container>
    )
}
