import styled from "styled-components";

export const ComboProducts = styled.div`
  margin-top: 0.5rem;
  width: 100%;
  overflow-x: scroll;
  display: flex;
  gap: 0.5rem;
  align-items: start;
  justify-content: start;

  @media (min-width: 768px) {
  }

  @media (min-width: 920px) {
  }
`;

export const ComboProduct = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  position: relative;

  .CloseDrawerIcon {
    position: absolute;
    right: 0;
    cursor: pointer;
  }

  .ProductImage {
    padding-top: 1rem;
    width: auto;
    max-width: 160px;
    height: auto;
    min-height: 120px;
    object-fit: contain;
    max-height: auto;
    margin: auto;
  }

  .ProductData--key,
  .ProductData--value {
    font-size: 14px;
  }

  .ProductData--key {
    font-weight: 600;
  }

  .ProductData--value {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 920px) {
  }
`

export const ComboResult = styled.div`
  margin: auto;
  margin-top: -10px;
  height: 240px;
  width: 300px;
  max-width: 98%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  //border: 1px solid red;
  overflow: hidden;

  .Case, .Mobo, .Processor, .Ram, .Cooler, .Storage, .Power, .Graphic {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .Case:hover, .Mobo:hover, .Processor:hover, .Ram:hover, .Cooler:hover, .Storage:hover, .Power:hover, .Graphic:hover {
    transform: scale(1.05);
    transition: all .1s ease-in-out;
  }

  .Case {
    position: absolute;
    //border: 1px solid red;
    right: 10%;
    bottom: 4%;
    height: 94%;
    width: 70%;
  }

  .Mobo {
    position: absolute;
    //border: 1px solid red;
    left: 4%;
    bottom: 3%;
    height: 76%;
    width: 58%;
  }

  .Processor {
    position: absolute;
    //border: 1px solid red;
    left: 36%;
    bottom: 1%;
    height: 34%;
    width: 31%;
  }

  .Power {
    position: absolute;
    //border: 1px solid brown;
    left: 2%;
    bottom: 2%;
    height: 37%;
    width: 33%;
  }

  .Ram {
    position: absolute;
    //border: 1px solid blue;
    left: 2%;
    bottom: 45%;
    height: 24%;
    width: 34%;
  }

  .Graphic {
    position: absolute;
    //border: 1px solid purple;
    right: 2%;
    bottom: 59%;
    height: 26%;
    width: 29%;
  }

  .Storage {
    position: absolute;
    //border: 1px solid orange;
    right: 2%;
    bottom: 32%;
    height: 26%;
    width: 30%;
  }

  .Cooler {
    position: absolute;
    //border: 1px solid black;
    right: 2%;
    bottom: 2%;
    height: 28%;
    width: 29%;
  }

  .Storage img {
    width: 100% !important;
    object-fit: contain !important;
  }

  @media (min-width: 400px) {
  }

  @media (min-height: 668px) {
    height: 280px;
    width: 345px;
  }

  @media (min-height: 768px) {
    height: 300px;
    width: 370px;
  }
`
