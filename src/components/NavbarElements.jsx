import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
  
export const Nav = styled.nav`
  background: blue;
  height: 45px;
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
  padding: 10px;
  cursor: pointer;
  &.active {
    color: white;
  };
  margin: 5px
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