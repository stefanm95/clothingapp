import styled from "styled-components";

export const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: ${({imageUrl}) => `url(${imageUrl})`};
`;

export const Body = styled.div`
    height: 5.6em;
    padding: 0 0.7em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 0.06em solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute;

    h2 {
      font-weight: bold;
      margin: 0 0.4em 0;
      font-size: 1.4em;
      color: #4a4a4a;
      text-transform: uppercase;
    }

    p {
      font-weight: lighter;
      font-size: 1em;
    }
    @media all and (max-width:30em){
      h2{
        display:block;
      }
      p{
        display:block;
      }
    }
`;

export const DirectoryItemContainer = styled.div`
    /* display:inline-block; */
    min-width: 30%;
    height: 21em;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.06em solid black;
    margin: 0 0.5em 0.9em;
    overflow: hidden;

    &:hover {
      cursor: pointer;

      & ${BackgroundImage} {
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & .${Body} {
        opacity: 0.9;
    }
    &:first-child {
      margin-right: 0.5em;
    }
    &:last-child {
     margin-left: 0.5em;
    }
  }
`;
