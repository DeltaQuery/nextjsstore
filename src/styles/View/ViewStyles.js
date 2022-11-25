import styled from "styled-components"

export const Main = styled.main`
z-index: 20;
margin: auto;
margin-top: 60px;
width: 95%;
display: flex;
flex-direction: column;
gap: 40px;
padding-top: 2rem;

@media (min-width: 600px) {
    width: 100%;
    margin-top: 72px;
    max-width: 1100px;
    padding-top: 3rem;
    padding-left: 60px;
    padding-right: 60px;
}
`;
