import styled from "styled-components"

export const PriceDiv = styled.div`
display: flex;
width: 100%;
max-width: 225px;

&.cart,
&.sidebar,
&.group {
  flex-direction: row;
  height: 17px;
}

&.detailed {
  flex-direction: column;
}

& > div {
    display: flex;
    justify-content: space-between;
}

.regularPrice > span, .dealPrice > span {
    font-size: var(--bg-size);
}

.dealPrice > span:first-child {
    color: #BB0627;
}

.regularPrice > span:first-child {
    font-size: var(--h3-size);
    color: var(--dark-gray);
}

.regularPrice > div:last-child {
    font-size: ${props => props.discountedPrice ? "var(--h2-size)" : "var(--bg-size)" };
    color: ${props => props.discountedPrice ? "var(--dark-gray)" : "black" };
    text-decoration: ${props => props.discountedPrice ? "line-through" : "none" };
    font-weight: ${props => props.discountedPrice ? "400" : "700" };
}

&.cart .regularPrice > span:first-child,
&.sidebar .regularPrice > span:first-child,
&.group .regularPrice > span:first-child,
&.cart .dealPrice > span:first-child,
&.sidebar .dealPrice > span:first-child,
&.group .dealPrice > span:first-child {
    display: none;
}

&.cart .regularPrice > div:last-child, 
&.sidebar .regularPrice > div:last-child, 
&.group .regularPrice > div:last-child,
&.cart .dealPrice > span:last-child, 
&.sidebar .dealPrice > span:last-child, 
&.group .dealPrice > span:last-child {
    font-size: var(--sm-size);
}

&.cart .dealPrice > span:last-child, 
&.sidebar .dealPrice > span:last-child, 
&.group .dealPrice > span:last-child,
&.detailed .dealPrice > span:last-child {
    font-weight: 600;
}

&.cart .regularPrice,
&.group .regularPrice,
&.sidebar .regularPrice {
    margin-left: ${props => props.discountedPrice ? "6px" : "0px"};
}

  @media (min-width: 600px) {
    &.detailed {
        flex-direction: column;
    }
  
    &.cart,
    &.sidebar,
    &.group {
    }
  }
`;