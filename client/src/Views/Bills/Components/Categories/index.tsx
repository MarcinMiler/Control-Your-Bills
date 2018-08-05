import * as React from 'react'

import { Subtitle } from 'src/Components/Subtitle'
import {
    Container,
    Category,
    FolderIcon,
    CategoryContent,
    CategoryName,
    CategoryCountItems
} from './style'
import { Button } from '../Button'

export const Categories: React.SFC<{}> = () => (
    <Container>
        <Subtitle>Categories</Subtitle>

        {[1, 2, 3, 4, 5, 6, 7].map(i => (
            <Category>
                <FolderIcon />

                <CategoryContent>
                    <CategoryName>Car</CategoryName>
                    <CategoryCountItems>8 items</CategoryCountItems>
                </CategoryContent>
            </Category>
        ))}

        <Button onClick={() => console.log('lol')} />
    </Container>
)
