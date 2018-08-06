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

export const Categories: React.SFC<{}> = () => (
    <Container>
        <Subtitle>Categories</Subtitle>

        {[1, 2, 3, 4, 5, 6, 7].map(i => (
            <Category key={i}>
                <FolderIcon />

                <CategoryContent>
                    <CategoryName>Car</CategoryName>
                    <CategoryCountItems>8 items</CategoryCountItems>
                </CategoryContent>
            </Category>
        ))}

        <CategoryButton onClick={() => console.log('lol')}>
            <PlusIcon />
        </CategoryButton>
    </Container>
)
