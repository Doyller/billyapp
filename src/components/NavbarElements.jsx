import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
  
export const Nav = styled.nav`
  background: blue;
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  z-index: 12;
  border: 2px solid Black
`;
  
export const NavLink = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 5px;
  height: 100%;
  cursor: pointer;
  &.active {
    color: white;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  white-space: nowrap; 
  @media screen and (max-width: 768px) {
    display: none;
  }
`;