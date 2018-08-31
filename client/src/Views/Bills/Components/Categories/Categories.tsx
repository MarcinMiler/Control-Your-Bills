import * as React from 'react'

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
import { CategoriesQuery_categories } from 'src/schemaTypes'

interface Props {
    categories: CategoriesQuery_categories[]
    push: (url: string) => void
}

export const CategoriesUI: React.SFC<Props> = ({ categories, push }) => (
    <Container>
        <Subtitle>Categories</Subtitle>

        {categories.map(category => (
            <Category
                key={category.id}
                onClick={() => push(`/bills/${category.id}`)}
            >
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
