import * as React from 'react'
import { Field } from 'formik'

import { Input } from 'src/Components/Input'
import { Button } from 'src/Components/Button'
import { Title, Right } from './style'

export const AddBill: React.SFC = () => (
    <>
        <Title>Add bill</Title>

        <Field name="title" placeholder="Title" component={Input} />

        <Field name="price" component={Input} />

        <Right>
            <Button text="Add bill" type="submit" />
        </Right>
    </>
)
