import * as React from 'react'

import { Dropdown } from 'src/Components/Dropdown'
import { Container, Button, PlusIcon } from './style'

const items = ['Date', 'Price low', 'Price up']

export const Buttons: React.SFC<{}> = () => (
    <Container>
        <Button>
            Add bill
            <PlusIcon />
        </Button>

        <Dropdown items={items} />
    </Container>
)
