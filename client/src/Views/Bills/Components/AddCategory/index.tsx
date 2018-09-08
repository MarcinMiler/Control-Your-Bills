import * as React from 'react'
import { Formik, Form, Field } from 'formik'

import { CreateCategory } from 'src/graphql/addCategory'
import { Input } from 'src/Components/Input'
import { Button } from 'src/Components/Button'

// interface FormValues {
//     name: string
// }

export const AddCategory: React.SFC<{}> = () => (
    <CreateCategory>
        {({ createCategory }) => (
            <Formik<{}, any>
                initialValues={{ name: '' }}
                onSubmit={async ({ name }: any, { resetForm }: any) => {
                    await createCategory({ variables: { name } })
                    resetForm()
                }}
            >
                {() => (
                    <Form>
                        <Field
                            name="name"
                            placeholder="Name"
                            component={Input}
                        />

                        <Button type="submit" text="Add category" />
                    </Form>
                )}
            </Formik>
        )}
    </CreateCategory>
)
