import * as React from 'react'

import { Title } from 'src/Components/Title'
import { Wrapper } from 'src/Components/Wrapper'
import { Background, Grid, Item } from './style'

export const Dashboard: React.SFC<{}> = () => (
    <Wrapper>
        <Background />

        <Title>Dashboard</Title>

        <Grid>
            <Item />

            <Item />

            <Item />

            <Item />
        </Grid>
    </Wrapper>
)
