import styled from "styled-components"

export const SectionDiv = styled.section`
  .TitleContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    padding-bottom: 10px;
  }

  .MoreLink {
    display: flex;
    align-items: center;
    text-decoration: underline;
    text-decoration-color: var(--link-color);
    cursor: pointer;
  }

  .MoreLink span {
    color: var(--link-color);
  }

  .CartTitle {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .CartTitle span, .CartTotal {
    font-size: var(--h3-size);
    font-weight: 700;
  }

  .SectionContent {
    padding-top: 10px;
  }
`;
