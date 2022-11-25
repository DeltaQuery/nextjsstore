import styled from "styled-components"

export const InstagramBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 20px;
  row-gap: 20px;
  grid-auto-rows: 1fr;

  .igBox > a > img {
    width: 100%;
    height: 100%;
}

  .categoryBox {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    text-align: center;
  }

  .categoryNameContainer {
    height: 46px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: var(--reg-size);
    margin-top: 0%;
  }

  .categoryImgContainer {
    width: 75%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #d9d9d9;
    border-radius: 300px;
  }

  .categoryImgContainer img {
    max-width: 100%;
    max-height: 100%;
  }

  & > div:nth-child(7),
  & > div:nth-child(8) {
    display: none;
  }

  .categoryImgContainer img:hover {
    transform: scale(1.05, 1.05);
    transition: transform 200ms;
  }

  @media (min-width: 360px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (min-width: 600px) {
    display: grid;
    grid-gap: 12px;
    row-gap: 36px;
    grid-auto-rows: 1fr;

    .categoryBox {
      aspect-ratio: 1;
    }

    .categoryBox h4 {
      font-size: var(--h4-size);
    }

    .categoryImgContainer {
      width: 77%;
      height: 77%;
    }
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));

    .categoryNameContainer {
      margin-top: 4%;
      font-size: var(--h3-size);
    }

    & > div:nth-child(7),
    & > div:nth-child(8) {
      display: flex; 
    }
  }
`;
