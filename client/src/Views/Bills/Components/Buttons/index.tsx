import * as React from 'react'
import { Container } from './style'
import { Dropdown } from '../../../../Components/Dropdown'

const items = ['Date', 'Price low', 'Price up']

export const Buttons: React.SFC<{}> = () => (
    <Container>
        <Dropdown items={items} />
    </Container>
)
