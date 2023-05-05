import styled, {css} from "styled-components";

const subColor = 'grey';
const mainColor = 'black';



const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`
export const FormInputLabel = styled.label`
  color: ${subColor};
    font-size: 1em;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 0.3em;
    top: 0.6em;
    transition: 300ms ease all;
    ${(({shrink}) => shrink && shrinkLabelStyles)};
`;

export const Input = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 1.1em;
  padding: 0.6em 0.6em 0.6em 0.3em;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 1.56em 0;

  &:focus {
      outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles};
  }
`;
export const Group = styled.div`
  position: relative;
  margin: 2.8em 0;
  input[type='password'] {
    letter-spacing: 0.3em;
  }
  @media (max-wdith: 410px){
    Group{
      width: 100%;
    }
  }
`;