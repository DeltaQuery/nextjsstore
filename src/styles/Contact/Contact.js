import styled from "styled-components"

export const ContactForm = styled.form`
padding-top: 0.5rem;
margin: auto;
max-width: 480px;
width: 100%;
display: flex;
flex-direction: column;
gap: 26px;

.ContactForm__Section {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--med-gray);
}

.ContactForm__Section:first-child label,
.ContactForm__Section:nth-child(4) label:nth-child(2),
.ContactForm__Section:nth-child(4) label:nth-child(3) {
    display: flex;
    flex-direction: column;
}

.ContactForm__Section input[type=text],
.ContactForm__Section input[type=email] {
    margin-top: 2px;
    height: 36px;
    border-radius: 6px;
    border: 1px solid var(--med-gray);
    padding-left: 4px;
}

&. section:first-child label,
&. section:nth-child(4) label {
    display: flex;
    flex-direction: column;
}

&. section:nth-child(4) label:last-child {
    flex-direction: row;
}

&. section:nth-child(2) label,
&. section:nth-child(3) label,
.direccionMasTarde {
    display: flex;
    gap: 4px;
}

&. section:last-child p {
    text-align: justify;
    color: var(--dark-gray);
}

.pickupP {
    margin-top: -4px;
    margin-bottom: 4px;
    text-align: justify;
    font-size: 13px;
    color: var(--dark-gray);
}

.pickupP a {
    font-size: 13px;
}

.ContactForm__Section p {
    text-align: justify;
}

@media (min-width: 600px) {
    .contactTitleContent {
        border: none !important;
        padding-bottom: 0px;
    }
}
`;



