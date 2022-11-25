import styled from "styled-components"

export const SelectQuantity = styled.select`
  &.cart,
  &.sidebar,
  &.group {
    display: none;
  }

  &.detailed {
        height: 46px;
        border-radius: 6px;
        font-weight: 600;
        width: 56px;
  }

  @media (min-width: 600px) {

    &.detailed {

    }
  }
`;

export const AlterQuantity = styled.div`
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 1px solid var(--med-gray);
    width: fit-content;
    border-radius: 3px;
    overflow: hidden;

    .AlterQuantityInput {
      text-align: center;
    }

    .AlterQuantityButton {
      cursor: pointer;
    }
  
    button {
      width: 27px;
      height: 26px;
      border: none;
  }
  
  input {
      height: 26px;
      width: 28px;
      border: none;
      border-right: 1px solid var(--med-gray);
      border-left: 1px solid var(--med-gray);;
  }

  .AlterQuantityInput {

  }

  @media (min-width: 600px) {

  }
`;