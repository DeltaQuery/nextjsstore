import styled from "styled-components"

export const ModelsDiv = styled.div`
  &.group,
  &.sidebar,
  &.cart {
    display: none;
  }

  .ModelsButton {
    cursor: pointer;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    background-color: white;
    margin-bottom: 6px;
  }

  .ModelsButton span {
    font-size: var(--h4-size);
    font-weight: 600;
  }

  .ModelsButton span:last-child::after {
    margin-left: 6px;
    content: "${(props) => (props.collapsible ? "-" : "+")}";
    color: var(--dark-gray);
  }

  .CollapsibleHidden {
    max-height: 0;
    overflow: hidden;
    transition: 0.2s;
    display: flex;
    gap: 0.5rem;
  }

  .CollapsibleVisible {
    max-height: 100%;
    transition: 0.2s;
    display: flex;
    gap: 0.5rem;
    overflow-x: auto;
  }

  .ModelContent {
    border: 1px solid var(--med-gray);
    border-radius: 6px;
    min-width: 100px;
    height: 85px;
    text-align: center;
    max-width: 120px;
  }

  .ModelModel {
    border-radius: 6px 6px 0px 0px;
    height: 49%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--light-gray);
    white-space: nowrap;
    text-overflow: ellipsis;
    display: block;
    display: block;
    overflow: hidden;
    padding-left: 4px;
    padding-right: 4px;
    padding-top: 13px;
    width: 100%;
  }

  .SelectedModel {
    border: 3px solid var(--main-gold);
  }

  .ModelPrice {
    border-top: 1px solid var(--med-gray);
    height: 51%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
