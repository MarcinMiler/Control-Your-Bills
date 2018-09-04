import * as React from 'react'
import * as yup from 'yup'
import { Formik, Form } from 'formik'
import { withRouter, RouteComponentProps } from 'react-router'

import { MutationAddBill } from 'src/graphql/addBill'
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

class C extends React.Component<RouteComponentProps<{ id: string }>> {
    public render() {
        const {
            match: {
                params: { id }
            }
        } = this.props
        return (
            <MutationAddBill>
                {({ addBill }) => (
                    <Formik<{}, FormValues>
                        initialValues={{
                            title: '',
                            price: 0
                        }}
                        validationSchema={schema}
                        onSubmit={async ({ title, price }) => {
                            await addBill({
                                variables: { title, price, categoryId: id }
                            })
                        }}
                    >
                        <Form>
                            <AddBill />
                        </Form>
                    </Formik>
                )}
            </MutationAddBill>
        )
    }
}

export const AddBillContainer = withRouter(C)
