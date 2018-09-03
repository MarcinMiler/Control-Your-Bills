import * as React from 'react'
import { Modal } from '.'
import { render, fireEvent } from 'react-testing-library'

describe('Modal', () => {
    it('should render correctly', () => {
        const handleClose = jest.fn()

        const { getByText } = render(
            <Modal handleClose={handleClose}>
                <p>Show modal</p>
            </Modal>
        )

        expect(getByText('Show modal')).toBeInTheDocument()
    })

    it('should close modal', () => {
        const handleClose = jest.fn()

        const { getByTestId } = render(
            <Modal handleClose={handleClose}>
                <p>Show modal</p>
            </Modal>
        )
        fireEvent.click(getByTestId('modal-close-button'))

        expect(handleClose).toHaveBeenCalledTimes(1)
    })
})
