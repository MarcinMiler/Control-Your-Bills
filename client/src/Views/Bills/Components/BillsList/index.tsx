import * as React from 'react'
import * as moment from 'moment'

import { withBills, WithBills } from 'src/graphql/bills'
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

export const C: React.SFC<WithBills> = ({ bills, loading }) => (
    <Container>
        <Legend>
            <Id>ID</Id>
            <Title>Title</Title>
            <Date>Date</Date>
            <Contract>Contract</Contract>
            <Price>Total Price</Price>
            <Actions>Actions</Actions>
        </Legend>
        {bills.map((bill, i) => (
            <Bill key={bill.id}>
                <Id>
                    <Circle>#{i}</Circle>
                </Id>
                <Title>{bill.title}</Title>
                <Date>{moment(bill.date).format('DD.MM.YYYY')}</Date>
                <Contract>
                    <RenewIcon active={0} />
                </Contract>
                <Price>$ {bill.price}</Price>
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

export const BillsList = withBills(C)
