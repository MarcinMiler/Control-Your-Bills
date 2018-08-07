import styled from 'styled-components'

import { MdAdd } from 'react-icons/md'

export const Container = styled.div`
    width: 100%;
    height: 80px;
    margin: 30px 0 30px 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
export const Button = styled.div`
    width: 150px;
    height: 50px;
    padding: 0 20px 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 30px;
    border-radius: 4px;
    background-color: ${props => props.theme.pink};
    color: white;
    font-weight: 600;
    cursor: pointer;
    transition: all 200ms ease;

    &:hover {
        box-shadow: ${props => '0px 0px 10px' + props.theme.pink};
    }
`
export const PlusIcon = styled(MdAdd)`
    width: 30px;
    height: 30px;
    padding: 5px;
    border-radius: 50%;
    background-color: white;
    color: ${props => props.theme.pink};
    box-sizing: border-box;
`
