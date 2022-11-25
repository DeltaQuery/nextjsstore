import styled from "styled-components"
export const FooterDiv = styled.footer`
width: 95%;
margin: auto;
margin-top: 40px;
display: grid;
grid-template-columns: repeat(1, 1fr);
gap: 40px;
padding-bottom: 40px;

&& > div {
    padding-top: 0px;
}

&& div section {
    margin: auto;
    width: 75%;
}

.Footer--contactInfoHeading {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.Footer--contactInfoTitle div h2, .Footer--contactInfoTitle div p  {
    text-align: center;
}

.Footer--contactInfoList {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 8px;
}

.Footer--contactInfoList p {
    display: flex;
    align-items: center;
    gap: 4px;
}

.Footer--contactInfoList p > span:nth-child(2) {
    max-width: 220px;
}

.Footer--footerContactH2 {
    margin-bottom: 10px;
}

.Footer--storeInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding-bottom: 25px;
}

.Footer--storeInfo p {
    display: flex;
    align-items: center;
    text-align: center;
}

.Footer--blueText {
    color: var(--snd-blue);
    font-weight: 600;
}

.Footer--zuliaHeart {
    margin-left: 4px;
}

.Footer--contactInfoTitle {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    border-top: 1px solid var(--med-gray);
    padding-top: 25px;
}

.CvFooter {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
  }

  .CvFooter a {
    font-weight: 700;
  }

  .CvFooter a:hover {
    color: var(--main-gold);
  }

  .CvFooter--Linkedin {
        text-align: right;
    }

  .CvFooter--MadeBy {
        text-align: center;
    }

@media (min-width: 600px) {
    max-width: 1100px;
    padding-left: 60px;
    padding-right: 60px;

    &. div:first-child {
        padding-left: 60px;
        padding-right: 60px;
    }

    && div section {
        width: 70%;
        max-width: 340px;
    }
    
    .CvFooter {
        display: flex !important;
        gap: 8rem !important;
    }
}

@media (min-width: 900px) {

    && > div {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
    }

    .Footer--contactInfoTitle {
        padding-top: 0px;
        border-top: none;
    }

    .Footer--storeInfo {
        padding-bottom: 0px;
    }

    .CvFooter {
        display: flex !important;
        gap: 12rem !important;
    }
}
`;

