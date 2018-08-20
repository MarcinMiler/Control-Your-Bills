import * as React from 'react'
import { Formik, Form } from 'formik'
import * as yup from 'yup'

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

export class AddBillContainer extends React.Component<{}, {}> {
    private submit = (values: FormValues) => console.log(values)

    public render() {
        return (
            <Formik<{}, FormValues>
                initialValues={{
                    title: '',
                    price: 0
                }}
                validationSchema={schema}
                onSubmit={this.submit}
            >
                {() => (
                    <Form>
                        <AddBill />
                    </Form>
                )}
            </Formik>
        )
    }
}
