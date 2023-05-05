import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const NavigationContainer = styled.div`
    height: 4.3em;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.6em;
  `;

export const LogoContainer = styled(Link)`
    height: 80%;
    width: 4.3em;
    padding: 1.6em;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end
`;

export const NavLink = styled(Link)`
  padding: 0 0.2em;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;
