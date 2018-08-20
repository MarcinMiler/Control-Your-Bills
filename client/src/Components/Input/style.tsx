import styled, { css } from 'styled-components'

interface InputProps {
    error?: boolean
}

export const Container = styled.div`
    width: 100%;
    height: 60px;
    margin: 30px 0 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
`
export const Label = styled.label`
    font-weight: 500;
    color: black;
`
export const StyledInput = styled.input<InputProps>`
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

    ${props =>
        props.error &&
        css`
            color: red;
            border-bottom: 1px solid red;
        `};

    &:focus {
        outline: none;
        border-bottom: 1px solid #223768;
    }
`
export const ErrorMessage = styled.p`
    position: absolute;
    top: 65px;
    left: 5px;
    color: red;
    font-size: 13px;
`
