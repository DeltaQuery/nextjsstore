import styled from "styled-components"

export const ProductImg = styled.div`
min-width: 80px;

&.group {
position: relative;
max-width: 240px;
min-height: 120px;
max-height: 210px;
height: 18vw;
}

.ImgContainer {
    width: 100%;
    height: 100%;
}

.ProductImg {
    max-width: 85%;
    max-height: 85%;
    object-fit: contain;
}

&.detailed {
    display: flex;
    justify-content: center;
    padding-top: 1rem;
    padding-bottom: 2rem;
}

&.sidebar img {
        max-width: 80px;
}

@media (min-width: 600px){
    &.detailed {
        padding-top: 1rem;
        padding-bottom: 0rem;
        .ProductImg {
            max-width: 80%;
            max-height: 80%;
        }
    }

    &.combo_list {
        min-height: 100px;
        max-height: 125px;
    }

    &.combo_list .ProductImg {
        max-width: 95%;
        max-height: 95%;
        object-fit: contain;
    }

    &.group {
        margin-bottom: -10px;
        margin-top: -8px;
    }
}
`;
