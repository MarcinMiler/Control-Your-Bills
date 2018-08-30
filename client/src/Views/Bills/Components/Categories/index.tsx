import * as React from 'react'

import { withCategories, WithCategories } from 'src/graphql/categories'
import { Subtitle } from 'src/Components/Subtitle'
import {
    Container,
    Category,
    FolderIcon,
    CategoryContent,
    CategoryName,
    CategoryCountItems,
    CategoryButton,
    PlusIcon
} from './style'

export const C: React.SFC<WithCategories> = ({ categories }) => (
    <Container>
        <Subtitle>Categories</Subtitle>

        {categories.map(category => (
            <Category key={category.id}>
                <FolderIcon />

                <CategoryContent>
                    <CategoryName>{category.name}</CategoryName>
                    <CategoryCountItems>
                        {category.billsCount} items
                    </CategoryCountItems>
                </CategoryContent>
            </Category>
        ))}

        <CategoryButton onClick={() => console.log('lol')}>
            <PlusIcon />
        </CategoryButton>
    </Container>
)

export const Categories = withCategories(C)
