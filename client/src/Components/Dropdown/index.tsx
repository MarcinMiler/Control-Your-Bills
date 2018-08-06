import * as React from 'react'

import {
    Container,
    Text,
    ArrowDownIcon,
    Suggestion,
    Suggestions,
    Relative
} from './style'

interface State {
    isOpen: boolean
    currentValue: string
}

interface Props {
    items: string[]
}

export class Dropdown extends React.Component<Props, State> {
    public readonly state = {
        isOpen: false,
        currentValue: this.props.items[0]
    }

    private selectNewValue = (value: string) =>
        this.setState({ isOpen: false, currentValue: value })

    private open = () =>
        this.setState(
            ({ isOpen }) =>
                isOpen === true ? { isOpen: false } : { isOpen: true }
        )

    public render() {
        const { isOpen, currentValue } = this.state

        return (
            <Relative>
                <Container onClick={() => this.open()}>
                    <Text>{currentValue}</Text>

                    <ArrowDownIcon />
                </Container>

                {isOpen && (
                    <Suggestions>
                        {this.props.items.map((item, i) => (
                            <Suggestion
                                key={i}
                                onClick={() => this.selectNewValue(item)}
                            >
                                <Text>{item}</Text>
                            </Suggestion>
                        ))}
                    </Suggestions>
                )}
            </Relative>
        )
    }
}
