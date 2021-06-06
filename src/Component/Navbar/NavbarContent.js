import React from "react";
import { Nav } from "react-bootstrap";

const NavbarContent = (props) => {
  return (
    <div>
      <Nav.Link active onClick={props.setshow}>{props.title}</Nav.Link>
    </div>
  );
};

export default NavbarContent;
