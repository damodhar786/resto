import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap';


class Dashboard extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Link to="/list" className="resto" style={{ color: "white", fontFamily: "cursive", fontSize: "18px", textDecoration: "none", margin: "5px" }}>Restos</Link>

                        <Nav className="me-auto">
                            <Link to="/create" className="nav-link"><i className="fa-solid fa-plus"></i> Add a Resto</Link>
                            <Link to="/list" className="nav-link"><i className="fa-solid fa-list"></i> Resto Directory</Link>
                            <Link to="/search" className="nav-link"><i className="fa-solid fa-magnifying-glass"></i> Search a Resto</Link>
                        </Nav>

                        <Nav>
                            <Link className="nav-link" to="/"><i className="fa-solid fa-user"></i> Logout</Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default Dashboard;