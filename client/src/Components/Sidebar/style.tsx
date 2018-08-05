import styled, { css } from 'styled-components'

import { MdDashboard, MdAssignment } from 'react-icons/md'

interface IconProps {
    active: number
}

export const Container = styled.div`
    width: 90px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    background-color: white;
`
export const Icons = styled.div`
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const DashboardIcon = styled(MdDashboard)<IconProps>`
    width: 40px;
    height: 40px;
    padding: 10px;
    color: #b8b8c7;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;

    ${props =>
        props.active &&
        css`
            background-color: white;
            color: ${props.theme.pink};
            box-shadow: 0px 0px 15px lightgray;
        `};

    &:hover {
        color: ${props => props.theme.pink};
    }
`

export const ListIcon = styled(MdAssignment)<IconProps>`
    width: 40px;
    height: 40px;
    padding: 10px;
    color: #b8b8c7;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;

    ${props =>
        props.active &&
        css`
            background-color: white;
            color: ${props.theme.pink};
            box-shadow: 0px 0px 15px lightgray;
        `};

    &:hover {
        color: ${props => props.theme.pink};
    }
`
