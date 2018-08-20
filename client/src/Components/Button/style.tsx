import styled from 'styled-components'

export const Container = styled.button`
    width: 150px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border: none;
    background-color: ${props => props.theme.pink};
    color: white;
    font-family: Montserrat;
    font-weight: 600;
    cursor: pointer;
    transition: all 200ms ease;
    outline: none;

    &:hover {
        box-shadow: ${props => '0px 0px 10px' + props.theme.pink};
    }
`
