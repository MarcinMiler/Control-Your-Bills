import * as React from 'react'
import * as moment from 'moment'

import { CategoryQuery_category_bills } from 'src/schemaTypes'
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

interface Props {
    bills: CategoryQuery_category_bills[]
    deleteBill: (
        {
            varaibles: { id }
        }: any
    ) => void
    handleSort: (columnName: string) => void
}

export const BillsListUI: React.SFC<Props> = ({
    bills,
    deleteBill,
    handleSort
}) => (
    <Container>
        <Legend>
            <Id>ID</Id>
            <Title onClick={() => handleSort('title')}>Title</Title>
            <Date onClick={() => handleSort('date')}>Date</Date>
            <Contract>Contract</Contract>
            <Price onClick={() => handleSort('price')}>Total Price</Price>
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
                        <CloseIcon
                            onClick={async () =>
                                await deleteBill({
                                    variables: { id: bill.id }
                                })
                            }
                        />
                    </IconGroup>
                </Actions>
            </Bill>
        ))}
    </Container>
)
