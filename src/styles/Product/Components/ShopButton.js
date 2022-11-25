import styled from "styled-components"

export const ShopButton = styled.button`
  cursor: pointer;
  background-color: var(--main-gold);
  height: 46px;
  width: 100%;
  border-radius: 6px;
  border: none;
  font-weight: 600;

  &.group {
    font-size: var(--sm-size);
    height: 40px;
  }

  &.cart,
  &.sidebar {
    display: none;
  }

  &.detailed {
    font-size: var(--h4-size);
}
  }

  @media (min-width: 650px) {
    &.detailed {
    font-size: var(--h4-size);
    }

    &.cart,
    &.sidebar,
    &.group {
      height: 46px;
    }
  }
`;
