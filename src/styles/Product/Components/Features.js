import styled from "styled-components"

export const FeaturesDiv = styled.div`
  &.group,
  &.sidebar,
  &.cart {
    display: none;
  }

  .FeaturesButton {
    cursor: pointer;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    background-color: white;
    margin-bottom: 6px;
  }

  .FeaturesButton span {
    font-size: var(--h4-size);
    font-weight: 600;
  }

  .FeaturesButton span:last-child::after {
    margin-left: 6px;
    content: "${(props) => (props.collapsible ? "-" : "+")}";
    color: var(--dark-gray);
  }

  .CollapsibleContainer {
    display: grid;
    position: relative;
  }
  
  .CollapsibleHidden {
    max-height: 0;
    overflow: hidden;
    transition: 0.2s;
  }

  .CollapsibleVisible {
    max-height: 100%;
    transition: 0.2s;
  }
`;
