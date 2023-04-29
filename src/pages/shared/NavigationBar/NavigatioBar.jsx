import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";

const NavigatioBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto d-flex gap-3">
              <Link to="/category/0" className="text-decoration-none">
                Home
              </Link>
              <Link to="/" className="text-decoration-none">
                About
              </Link>
              <Link to="/" className="text-decoration-none">
                Career
              </Link>
            </Nav>
            <Nav>
              {user && <FaUserCircle style={{ fontSize: "2rem" }} />}

              {user ? (
                <Button onClick={handleLogOut} variant="dark">
                  Log Out
                </Button>
              ) : (
                <Link to="/login">
                  <Button variant="dark">Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigatioBar;
