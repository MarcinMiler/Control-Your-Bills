import styled from 'styled-components'

import { MdFolder } from 'react-icons/md'

export const Container = styled.div`
    width: 300px;
    height: 100vh;
    position: relative;
    background-color: ${props => props.theme.lightgray};
`
export const Category = styled.div`
    width: 100%;
    height: 90px;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
        background: linear-gradient(to right, #f1f1f6, white);
    }
`
export const FolderIcon = styled(MdFolder)`
    margin: 0 20px 0 30px;
    font-size: 48px;
    color: #a2abc0;
`
export const CategoryContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const CategoryName = styled.p`
    margin-bottom: 3px;
    font-size: 18px;
    font-weight: 600;
    color: ${props => props.theme.darkblue};
`
export const CategoryCountItems = styled.div`
    margin-top: 3px;
    font-size: 14px;
    font-weight: 500;
    color: #949493;
`
