import React from 'react';
import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <i class="bi bi-brightness-alt-high-fill"></i>weather99
        </Navbar.Brand>
        <Navbar.Brand>
          <button onClick={refreshPage}>
            <i class="bi bi-arrow-clockwise"></i>
          </button>
          refresh
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Navigation;