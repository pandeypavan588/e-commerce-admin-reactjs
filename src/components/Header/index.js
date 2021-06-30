import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import { NavLink,Link } from "react-router-dom";
import { signout } from "../../actions";

export default function Header() {
  
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch()
  const renderNonLoggedLinks = ()=>{
    return (
      <Nav>
        <li className="nav-item">
                <NavLink to="/signin" className="nav-link">Sign In</NavLink>
            </li>
            <li className="nav-item">
                 <NavLink to="/signup"  className="nav-link">Sign Up</NavLink>
            </li>
      </Nav>
    );
  }

  const renderLoggedLinks = ()=>{
    return (
      <Nav>
        <span  className="nav-link" onClick={logout}>Logout</span>
      </Nav>
    );
  }

  const logout = ()=>{
    dispatch(signout())
  }
  return (
    <>
      <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark" style={{zIndex:1}}>
        <Container fluid>
          <Link to="/" className="navbar-brand">
          Admin Dashboard
        </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            
            </Nav>
            {
              auth.authenticate ? renderLoggedLinks():renderNonLoggedLinks()
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
