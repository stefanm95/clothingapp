import styled from "styled-components";
import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
    height: 18.75em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const FormContainer = styled.form`
    height: 6.25em;
    width: 30em;
    @media (max-width: 768px) {
        width: 21em;
    }
`

export const PaymentButton = styled(Button)`
    margin-left: auto;
    margin-top: 1.87em;
`