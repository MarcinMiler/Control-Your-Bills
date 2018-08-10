import styled from 'styled-components'

import { MdAutorenew, MdModeEdit, MdClose } from 'react-icons/md'

interface RenewIconProps {
    active?: boolean
}

export const Container = styled.div`
    width: 100%;
`
export const Legend = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
`
export const Text = styled.div`
    font-weight: 600;
    color: ${props => props.theme.darkblue};
    text-align: center;
`
export const Id = Text.extend`
    width: 100px;
`
export const Title = Text.extend`
    flex-grow: 1;
    text-align: left;
`
export const Date = Text.extend`
    width: 250px;
`
export const Contract = Text.extend`
    width: 200px;
`
export const Price = Text.extend`
    width: 150px;
`
export const Actions = Text.extend`
    width: 150px;
`
export const Bill = styled.div`
    width: 100%;
    height: 80px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
    background-color: white;
    box-shadow: 0px 6px 15px lightgray;
`
export const Circle = styled.div`
    width: 40px;
    height: 40px;
    margin: 0 auto 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #ffb3f5;
`
export const RenewIcon = styled(MdAutorenew)<RenewIconProps>`
    margin: 0 auto 0 auto;
    font-size: 22px;
    color: ${props => (props.active ? '#62e389' : props.theme.lightgray)};
`
export const IconGroup = styled.div`
    margin: 0 auto 0 auto;
`
export const EditIcon = styled(MdModeEdit)`
    margin-right: 5px;
    font-size: 22px;
    color: ${props => props.theme.darkgray};
    cursor: pointer;
    transition: all 200ms ease;

    &:hover {
        color: #62e389;
    }
`
export const CloseIcon = styled(MdClose)`
    margin-left: 5px;
    font-size: 22px;
    color: ${props => props.theme.darkgray};
    cursor: pointer;
    transition: all 200ms ease;

    &:hover {
        color: #f44242;
    }
`
