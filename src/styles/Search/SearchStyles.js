import styled from "styled-components"

export const SearchedProducts = styled.div`
margin-top: 2rem;
display: grid;
grid-template-columns: repeat(2, minmax(0, 1fr));
grid-gap: 8px;
row-gap: 8px;
grid-auto-rows: 1fr;

@media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

@media (min-width: 920px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;