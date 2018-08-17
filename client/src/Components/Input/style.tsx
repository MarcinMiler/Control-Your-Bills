import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 60px;
    margin: 30px 0 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const Label = styled.label`
    font-weight: 500;
    color: black;
`
export const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: lightgray;
`
export const StyledInput = styled.input`
    width: 100%;
    height: 40px;
    padding: 0 5px 0 5px;
    background: transparent;
    border: none;
    border-bottom: 1px solid lightgray;
    font-family: Montserrat;
    font-weight: 500;
    font-size: 14px;
    color: black;
    box-sizing: border-box;
    transition: all 300ms ease;

    &:focus {
        outline: none;
        border-bottom: 1px solid #223768;
    }
`
