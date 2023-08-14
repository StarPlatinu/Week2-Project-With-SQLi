import React from 'react';
import {Container, Navbar} from 'react-bootstrap';

const navbarStyle = {
    backgroundColor: "lightblue"
}

const Header = (props) => {
    return (
        <Navbar style={navbarStyle} data-bs-theme="light">    
        <Container>
        <Navbar.Brand href="/">{props.title}</Navbar.Brand>   
        </Container>              
      </Navbar>
    )
};

export default Header;