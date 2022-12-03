import styled from "styled-components";

export const AdNav = styled.div`
  width: 100%;
  position: fixed;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  top: 0;
  background: linear-gradient(269.88deg, #009c92 -2.51%, #06304c 51.96%);
  color: white;
  z-index: 10 !important;
  padding-left: 1rem;
  padding-right: 1rem;

  .NavContainer {
    margin: auto;
    max-width: 800px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .RightNav {
  }

  .RightNav__Menu {
    display: flex;
    gap: 2rem;
  }

  .RightNav__Menu li a {
    color: white;
    font-size: var(--reg-size);
    font-weight: 600;
  }

  .RightNav__Menu li a:hover {
  }

  @media (min-width: 600px) {
    padding-left: 0rem;
    padding-right: 0rem;
    height: 72px;
  }
`;
