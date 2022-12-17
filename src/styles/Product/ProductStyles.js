import styled from "styled-components"

export const ProductDiv = styled.div`
  display: flex;
  min-width: 160px;
  padding: 10px;
  background-color: white;
  border: 1px solid var(--reg-gray);
  border-radius: 12px;
  gap: 6px;

  &.cart > div:nth-child(2){
    width: 100%;
  }

  &.cart {
    border: none;
  }

  &.cart .imgContainer {
    width: 30%;
    max-width: 130px;
  }

  .imgContainer a, .imgContainer div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.detailed .imgContainer {
    display: flex;
    justify-content: center;
  }

  &.group,
  &.detailed {
    flex-direction: column;
  }

  &.group > div:nth-child(2){
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &.cart,
  &.sidebar {
    flex-direction: row;
  }

  &.sidebar {
    align-items: center;
    gap: 2rem;
    max-width: 340px;
  }

  .Product--Buttons {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  &.detailed > div:nth-child(2){
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &.detailed .RemoveIcon, &.sidebar .RemoveIcon, &.group .RemoveIcon {
    display: none;
  }

  &.combo_list {
    max-width: 160px;
  }
  
  @media (min-width: 600px) {
    width: 100%;
    margin: auto;
    padding: 15px;
    gap: 2rem;

    &.combo_list {
      min-width: 180px;
      margin: 0;
    }

    &.group > div:nth-child(2){
      gap: 6px;
    }

    &.detailed {
      flex-direction: row;
    }

    &.detailed > div:first-child {
      width: 36%;
      display: block;
      margin: 0;
    }

    &.detailed > div:first-child a {
      display: block;
    }

    &.detailed > div:nth-child(2) {
      width: 64%;
    }

    &.detailed > div:nth-child(2){
      gap: 2rem;
    }
  }
    `;

