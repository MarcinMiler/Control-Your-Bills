import styled from 'styled-components'

import { MdAdd } from 'react-icons/md'

export const Container = styled.div`
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 50px;
    left: 270px;
    border-radius: 4px;
    background-color: ${props => props.theme.pink};
    cursor: pointer;
    transition: all 200ms ease;

    &:hover {
        box-shadow: 0px 0px 15px #ff96f5;
        transform: scale(1.1);
    }
`
export const PlusIcon = styled(MdAdd)`
    font-size: 28px;
    color: white;
`
