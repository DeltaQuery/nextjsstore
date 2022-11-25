import styled from "styled-components"

export const SidecartDiv = styled.div`
position: fixed;
width: 360px;
max-width: 98%;
top: 60px;
height: calc(100% - 60px);
transition: all .5s ease;
background-color: white;
z-index: 1;
box-shadow: 0 0px 20px rgba(0, 0, 0, 0.5);
clip-path: inset(0px -20px 0px 0px);
display: flex;
flex-direction: column;
align-items: center;
padding-top: 0rem;
gap: 1rem;
padding-bottom: 1rem;
flex: 0.25;
pointer-events:auto !important;
overflow: scroll;
left: ${props => props.position ? props.position : "-2000px"};

.SidecartContent {
    padding-top: 1.6rem;
    width: 94%;
    display: flex;
    gap: 2.4rem;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 1.6rem;
}

@media (min-width: 600px) {
  top: 72px;
  height: calc(100% - 72px);
}
`;
