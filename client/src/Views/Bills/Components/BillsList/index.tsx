import * as React from 'react'

import {
    Container,
    Bill,
    Legend,
    Id,
    Title,
    Date,
    Contract,
    Price,
    Actions,
    Circle,
    RenewIcon,
    IconGroup,
    EditIcon,
    CloseIcon
} from './style'

export const BillsList: React.SFC<{}> = () => (
    <Container>
        <Legend>
            <Id>ID</Id>
            <Title>Title</Title>
            <Date>Date</Date>
            <Contract>Contract</Contract>
            <Price>Total Price</Price>
            <Actions>Actions</Actions>
        </Legend>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(bill => (
            <Bill key={bill}>
                <Id>
                    <Circle>#1</Circle>
                </Id>
                <Title>Insurance</Title>
                <Date>11.07.2018</Date>
                <Contract>
                    <RenewIcon active />
                </Contract>
                <Price>$ 200</Price>
                <Actions>
                    <IconGroup>
                        <EditIcon />
                        <CloseIcon />
                    </IconGroup>
                </Actions>
            </Bill>
        ))}
    </Container>
)
