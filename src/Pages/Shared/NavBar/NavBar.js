
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const NavBar = () => {

        const { user, logOut } = useAuth()
        return (
                <div className="bg-info">
                        <Navbar bg="" variant="light">
                                <Container>
                                        <Navbar.Brand style={{ fontSize: '2rem' }} className="m-0 fw-bolder " as={Link} to="/home">IT-SHOP</Navbar.Brand>
                                        <Nav className="ms-auto text-center">
                                                <Nav.Link className="fw-normal" as={Link} to="/home">Home</Nav.Link>
                                                <Nav.Link className="fw-normal" as={Link} to="/explore">More Product</Nav.Link>
                                                {
                                                        user?.email && <Nav.Link className="fw-normal" as={Link} to="/dash">Admin</Nav.Link>
                                                }
                                                {
                                                        user?.email ? <Nav.Link className="fw-normal" onClick={logOut}>Log out</Nav.Link> : <Nav.Link className="fw-normal" as={Link} to="/login">Login</Nav.Link>
                                                }


                                        </Nav>
                                </Container>

                        </Navbar>
                </div>
        );
};

export default NavBar;