import * as React from 'react'
import { render, fireEvent } from 'react-testing-library'
import 'jest-dom/extend-expect'

import { Button } from './index'

describe('Button', () => {
    it('should render correct', () => {
        const { getByText } = render(<Button text="Button" type="submit" />)

        expect(getByText('Button').textContent).toBe('Button')
        expect(getByText('Button')).toHaveAttribute('type', 'submit')
    })

    it('should call an onClick function', () => {
        const spy = jest.fn()
        const { getByText } = render(<Button text="Button" onClick={spy} />)

        fireEvent.click(getByText('Button'))

        expect(spy).toHaveBeenCalledTimes(1)
    })
})
