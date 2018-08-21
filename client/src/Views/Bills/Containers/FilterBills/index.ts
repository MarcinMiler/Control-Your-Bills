import { Container } from 'unstated'

interface State {
    open: boolean
    items: string[]
    currentValue: string
}

export class FilterBills extends Container<State> {
    public readonly state = {
        open: false,
        items: ['Newest', 'Oldest'],
        currentValue: 'Newest'
    }

    public toggle = () =>
        this.setState(
            ({ open }) => (open === true ? { open: false } : { open: true })
        )

    public selectNewValue = (value: string) =>
        this.setState({ open: false, currentValue: value })
}
