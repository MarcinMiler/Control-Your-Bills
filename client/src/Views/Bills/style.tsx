import styled from 'styled-components'

export const Background = styled.div`
    width: 30%;
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    background: linear-gradient(#f1f1f6, white);
    z-index: -1;
`
export const Grid = styled.div`
    display: grid;
    grid-template-columns: auto 400px;
    grid-template-rows: 400px;
    grid-column-gap: 50px;
`
export const Item = styled.div`
    padding: 50px 50px 30px 30px;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0px 6px 15px lightgray;
    box-sizing: border-box;
`
