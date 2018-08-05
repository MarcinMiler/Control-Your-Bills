import * as React from 'react'

import { Title } from 'src/Components/Title'
import { Wrapper } from 'src/Components/Wrapper'
import { Row } from 'src/Components/Row'
import { Categories } from './Components/Categories'
import { Background } from './style'

export const Bills: React.SFC<{}> = () => (
    <Row>
        <Categories />

        <Wrapper>
            <Background />

            <Title>Bills</Title>
        </Wrapper>
    </Row>
)
