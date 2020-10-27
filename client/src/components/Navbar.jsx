import React from "react";
import { Navbar } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar expand="lg" style={{backgroundColor:"#00112c" , color:"white"}}>
      <Navbar.Brand href="#home" style={{ color:"white"}}>Bytescrum technology Pvt Ltd</Navbar.Brand>
    </Navbar>
  );
}

export default NavBar;
