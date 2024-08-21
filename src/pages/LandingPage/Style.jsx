import styled from 'styled-components';

export const Navigation = styled.div `
    background-color:  ${props => props.theme.colors.BegeUm};
    color:  ${props => props.theme.colors.VerdeEscuro};
    padding: 0.3rem 3rem;
    width: 100%;
    height: 5rem;
    position: fixed;
    top: 0;
    z-index: 10;        
    display: flex;
    align-items: center;
    font:  ${props => props.theme.fonts.Principal};
    font-size: 1.5rem;
`
export const ListStyle = styled.ul`
    color:  ${props => props.theme.colors.VerdeEscuro};
    display: flex;
    flex-direction: row; 
    align-items: center;
    border: 1px solid red;
    justify-content: flex-end;
`
export const Body = styled.body`
    width: 100%;
    background: rgb(254,252,252);
    background: linear-gradient(0deg, rgba(254,252,252,1) 0%, rgba(190,215,185,1) 100%);
`
export const CardLandingPage = styled.div`

`