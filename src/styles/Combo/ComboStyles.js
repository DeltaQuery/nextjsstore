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
    padding-bottom: 3rem;
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

  .ComboButtonContainer {
    padding-bottom: 1rem;
    padding-top: 0.5rem;
    background: white;
    position: sticky;
    bottom: 0px;
  }
`

export const ComboResult = styled.div`
  margin-top: -10px;
  width: 100%;
  position: relative;

  .TotalContainer {
    position: absolute;
    right: 0px;
    padding: 4px;
    text-align: right;
    z-index: 0;
    font-size: 12px;
  }

  .TotalContainer--Subtotal {
    top: 0;
  }

  .TotalContainer--Savings {
    top: 22px;
    font-weight: 600;
  }

  .TotalContainer--Total {
    top: 44px;
    font-weight: 600;
    color: #B12704;
  }
  
  .ComboResult--Container {
    height: 195px;
    width: 250px;
    max-width: 100%;
    position: relative;
    overflow: hidden;
  }  

  .ComboResult--Container_View {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ComboResult--Container_Details {
    z-index: -1;
    overflow: scroll;
  }

  .Case, .Mobo, .Processor, .Ram, .Cooler, .Storage, .Power, .Graphic {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .Case {
    //z-index: -3;
  }

  .Mobo {
    //z-index: -2;
  }

  .Processor, .Ram, .Graphic, .Storage, .Cooler, .Power {
    //z-index: -1;
  }

  .Case:hover, .Mobo:hover, .Processor:hover, .Ram:hover, .Cooler:hover, .Storage:hover, .Power:hover, .Graphic:hover {
    transform: scale(1.05);
    transition: all .1s ease-in-out;
  }

  .CaseShadow, .MoboShadow, .ProcessorShadow, .RamShadow, .PowerShadow, .GraphicShadow, .CoolerShadow, .StorageShadow {
    //z-index: -4;
  }

  .Case, .CaseShadow {
    position: absolute;
    //border: 1px solid red;
    right: 11%;
    bottom: 4%;
    height: 94%;
    width: 70%;
  }

  .Mobo, .MoboShadow {
    position: absolute;
    //border: 1px solid red;
    left: 3%;
    bottom: 3%;
    height: 76%;
    width: 58%;
  }

  .Processor, .ProcessorShadow {
    position: absolute;
    //border: 1px solid red;
    left: 35%;
    bottom: 1%;
    height: 34%;
    width: 31%;
  }

  .Power, .PowerShadow {
    position: absolute;
    //border: 1px solid brown;
    left: 1%;
    bottom: 2%;
    height: 37%;
    width: 33%;
  }

  .Ram, .RamShadow {
    position: absolute;
    //border: 1px solid blue;
    left: 1%;
    bottom: 45%;
    height: 24%;
    width: 33%;
  }

  .Graphic, .GraphicShadow {
    position: absolute;
    //border: 1px solid purple;
    right: 3%;
    bottom: 59%;
    height: 26%;
    width: 30%;
  }

  .Storage, .StorageShadow {
    position: absolute;
    //border: 1px solid orange;
    right: 3%;
    bottom: 2%;
    height: 28%;
    width: 30%;
  }

  .Cooler, .CoolerShadow {
    position: absolute;
    //border: 1px solid black;
    right: 3%;
    bottom: 32%;
    height: 26%;
    width: 30%;
  }

  .Storage img, .Graphic img, .StorageShadow img, .GraphicShadow img {
    width: 100% !important;
    object-fit: contain !important;
  }

  @media (min-width: 395px) {
    .ComboResult--Container {
    height: 230px;
    width: 290px;
    }
  }

  @media (min-width: 420px) {
    .ComboResult--Container {
    height: 240px;
    width: 300px;
    }
  }

  @media (min-width: 460px) {
    .ComboResult--Container {
    height: 280px;
    width: 340px;
    }
  }

  @media (min-width: 500px) {
    .ComboResult--Container {
    margin: auto;
    }
  }

  @media (min-width: 560px) {
    .ComboResult--Container {
    margin: auto;
    }

    .TotalContainer {
      font-size: 16px;
    }

    .TotalContainer--Savings {
      top: 24px;
    }
  
    .TotalContainer--Total {
      top: 48px;
    }
  }
`

export const IconComboDiv = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  right: 0px;
  color: #FFF;
  border-radius: 50px;
  text-align: center;
  box-shadow: 2px 2px 3px #999;
  z-index: 100;
  cursor: pointer;
  
.CartQuantity {
  position: absolute;
  background-color: var(--main-gold);
  color: black;
  font-weight: 700;
  width: 20px;
  height: 20px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -2px;
  left: 26px;
}

  &.CartIcon {
    z-index: 0;
    background-color: dodgerblue;
    bottom: 60px;
  }

  &.DetailsIcon {
    z-index: 0;
    background-color: #25d366;
    bottom: 12px;
  }

  &:hover  {
  transform: scale(1.05, 1.05);
  transition: transform 200ms;
}

.my-float {
  margin-top: 9px;
}
`;