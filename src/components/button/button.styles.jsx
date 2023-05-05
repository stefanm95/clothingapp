import styled from "styled-components";

import { SpinnerContainer } from "../spinner/spinner.styles";

export const BaseButton = styled.button`
    display:inline-block;
    background-color: black;
    letter-spacing: 0.5;
    padding: 0.35em 1.2em;
    border:none;
    margin:0 0.3em 0.3em 0;
    border-radius:0.12em;
    box-sizing: border-box;
    text-decoration:none;
    font-family:'Open Sans Condensed';
    text-transform: uppercase;
    font-weight:300;
    font-size: 0.9em;
    color: white;
    text-align: center;
    transition: all 0.2s;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }
    @media all and (max-width:30em){
      &:button{
        display: block;
        margin:0.4em auto;
      }
    }
`;

export const GoogleSignInButton = styled(BaseButton)`
      background-color: #4285f4;
      color: white;
  
      &:hover {
        background-color: #357ae8;
        border: none;
      }
`;

export const InvertedButton = styled(BaseButton)`
      background-color: white;
      color: black;
      border: 1px solid black;
  
      &:hover {
        background-color: black;
        color: white;
        border: none;
      }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`