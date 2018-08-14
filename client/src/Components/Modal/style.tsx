import styled from 'styled-components'

import { MdClose } from 'react-icons/md'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
`
export const Content = styled.div`
    width: 1200px;
    height: 600px;
    padding: 30px;
    position: relative;
    border-radius: 5px;
    background-color: white;
`
export const CloseIcon = styled(MdClose)`
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 28px;
    color: black;
    cursor: pointer;
    transition: all 200ms ease;

    &:hover {
        transform: rotate(90deg);
    }
`
