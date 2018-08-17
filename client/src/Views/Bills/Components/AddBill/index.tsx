import * as React from 'react'

import { Input } from 'src/Components/Input'
import { Button } from 'src/Components/Button'
import { Title, Right } from './style'

export const AddBill: React.SFC<{}> = () => (
    <>
        <Title>Add bill</Title>

        <Input onChange={() => console.log('lol')} label="Title" type="text" />

        <Input onChange={() => console.log('lol')} label="Price" type="text" />

        <Right>
            <Button onClick={() => console.log('click')} text="Add bill" />
        </Right>
    </>
)
