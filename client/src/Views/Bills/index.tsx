import * as React from 'react'

import { Title } from 'src/Components/Title'
import { Wrapper } from 'src/Components/Wrapper'
import { Row } from 'src/Components/Row'
import { Categories } from './Components/Categories'
import { Buttons } from './Components/Buttons'
import { Background, Grid, Item } from './style'
import { BillsList } from './Components/BillsList'
import { AreaCharts } from '../../Components/LineChart'

export const Bills: React.SFC<{}> = () => (
    <Row>
        <Categories />

        <Wrapper>
            <Background />

            <Title>Bills</Title>

            <Grid>
                <Item>
                    <AreaCharts />
                </Item>
                <Item />
            </Grid>

            <Buttons />

            <BillsList />
        </Wrapper>
    </Row>
)
