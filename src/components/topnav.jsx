import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <img
            src="images/billybobbuttonnobackground.png"
            alt="icon"
            height={40}
          ></img>
          <NavLink to="/TopDeals" activeStyle>
            Top Deals
          </NavLink>
          <NavLink to="/Computers" activeStyle>
            Computers
          </NavLink>
          <NavLink to="/Phones" activeStyle>
            Phones
          </NavLink>
          <NavLink to="/Security" activeStyle>
            Security
          </NavLink>
          <NavLink to="/Audio" activeStyle>
            Audio
          </NavLink>
          <NavLink to="/Cart" activeStyle>
            Cart
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
