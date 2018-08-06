import styled from 'styled-components'

import { MdKeyboardArrowDown } from 'react-icons/md'

export const Container = styled.div`
    width: 150px;
    height: 50px;
    padding: 0 10px 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    border-radius: 5px;
    border: ${props => '2px solid ' + props.theme.darkblue};
    cursor: pointer;
    box-sizing: border-box;
`
export const Relative = styled.div`
    position: relative;
`
export const Text = styled.p`
    font-weight: 600;
    color: ${props => props.theme.darkblue};
    user-select: none;
`
export const ArrowDownIcon = styled(MdKeyboardArrowDown)`
    font-size: 28px;
    color: ${props => props.theme.darkblue};
`
export const Suggestions = styled.div`
    width: 150px;
    position: absolute;
    left: 0px;
    top: 60px;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0px 0px 15px lightgray;
`
export const Suggestion = styled.div`
    width: 150px;
    height: 60px;
    padding: 0 10px 0 20px;
    display: flex;
    align-items: center;
    transition: all 300ms ease;
    cursor: pointer;
    box-sizing: border-box;

    &:hover {
        background-color: ${props => props.theme.lightgray};
    }
`
