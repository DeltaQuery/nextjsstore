import styled from "styled-components"

export const CartSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 1.6rem;
  background-color: white;
  border: 1px solid var(--reg-gray);
  border-radius: 12px;
  gap: 2rem;

  .CartProducts {
    display: flex;
    flex-direction: column;
  }

  .CartInfo {
    place-self: center;
    width: 100%;
  }

  .cartResumeContainer {
    padding: 10px;
    padding-top: 12px;
    padding-bottom: 12px;
  }

  .cartResumeContent {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .detailDiscount {
    color: var(--dark-red);
  }

  .cartResumeContent > p {
    color: var(--dark-gray);
  }

  .cartResumeLine {
    display: flex;
    justify-content: space-between;
  }

  .GoToContactInfo {
    margin: auto;
    width: 100%;
    height: 110px;
    background-color: white;
    position: sticky;
    bottom: 0;
    z-index: 0;
    padding-top: 14px;
  }

  .GoToContactInfo p {
    margin-top: 10px;
    text-align: center;
  }

  @media (min-width: 600px) {
    flex-direction: row;

    .CartProducts {
      width: 60%;
    }

    .CartInfo {
      width: 40%;
      place-self: start;
    }

    .GoToContactInfo {
      margin-top: 0px;
      height: 110px;
      background-color: white;
      position: relative;
    }
  }
`;
