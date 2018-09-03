import * as React from 'react'

import { Subtitle } from 'src/Components/Subtitle'
import { Modal } from 'src/Components/Modal'
import { AddCategory } from '../AddCategory'
import { CategoriesQuery_categories } from 'src/schemaTypes'
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

interface Props {
    categories: CategoriesQuery_categories[]
    isOpen: boolean
    toggleModal: () => void
    push: (url: string) => void
}

export const CategoriesUI: React.SFC<Props> = ({
    categories,
    isOpen,
    toggleModal,
    push
}) => (
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

        <CategoryButton onClick={toggleModal}>
            <PlusIcon />
        </CategoryButton>

        {isOpen && (
            <Modal handleClose={toggleModal}>
                <AddCategory />
            </Modal>
        )}
    </Container>
)
