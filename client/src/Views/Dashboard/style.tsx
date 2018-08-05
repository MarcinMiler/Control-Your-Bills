import styled from 'styled-components'

export const Background = styled.div`
    width: 60%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 90px;
    background: linear-gradient(#f1f1f6, white);
    z-index: -1;
`
export const Grid = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: 350px 350px;
    grid-column-gap: 50px;
    grid-row-gap: 50px;
`
export const Item = styled.div`
    border-radius: 5px;
    background-color: white;
    box-shadow: 0px 6px 15px lightgray;
`
