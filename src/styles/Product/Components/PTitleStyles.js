import styled from "styled-components"

export const TitleDiv = styled.div`
font-weight: 700;

  &.detailed {
    font-size: var(--h1-size);
  }

  &.cart {
    margin-bottom: 8px;
  }

  &.cart,
  &.sidebar,
  &.group {
    display: -webkit-box;
    font-size: var(--sm-size);
    justify-content: flex - start;
    width: 100%;
    height: 33px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    line-clamp: 2; 
    -webkit-box-orient: vertical;
  }

  &.combo_list {
    margin-bottom: 4px;
  }

  @media (min-width: 600px) {
    &.cart,
    &.sidebar,
    &.group {
      margin-bottom: 2px;
    }

    &.detailed {

    }
  }
`;
