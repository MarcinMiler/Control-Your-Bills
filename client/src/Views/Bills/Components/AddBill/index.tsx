import * as React from 'react'
import * as yup from 'yup'
import { Formik, Form } from 'formik'

import { withAddBill, WithAddBill } from 'src/graphql/addBill'
import { AddBill } from './AddBill'

const schema = yup.object().shape({
    title: yup.string().required(),
    price: yup
        .number()
        .required()
        .moreThan(0)
})

interface FormValues {
    title: string
    price: number
}

export class C extends React.Component<WithAddBill> {
    public render() {
        return (
            <Formik<{}, FormValues>
                initialValues={{
                    title: '',
                    price: 0
                }}
                validationSchema={schema}
                onSubmit={this.props.addBill}
            >
                <Form>
                    <AddBill />
                </Form>
            </Formik>
        )
    }
}

export const AddBillContainer = withAddBill(C)
