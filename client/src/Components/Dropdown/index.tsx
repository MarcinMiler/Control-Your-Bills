import * as React from 'react'

import {
    Container,
    Text,
    ArrowDownIcon,
    Suggestion,
    Suggestions,
    Relative
} from './style'

interface Props {
    open: boolean
    items: string[]
    currentValue: string
    toggle: () => void
    selectNewValue: (value: string) => void
}

export const Dropdown: React.SFC<Props> = ({
    open,
    items,
    currentValue,
    toggle,
    selectNewValue
}) => (
    <Relative>
        <Container onClick={toggle}>
            <Text>{currentValue}</Text>

            <ArrowDownIcon rotate={open ? 1 : 0} />
        </Container>

        {open && (
            <Suggestions>
                {items.map((item, i) => (
                    <Suggestion key={i} onClick={() => selectNewValue(item)}>
                        <Text>{item}</Text>
                    </Suggestion>
                ))}
            </Suggestions>
        )}
    </Relative>
)
