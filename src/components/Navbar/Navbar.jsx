import styled from "styled-components/macro";
import React from 'react'
import About from "../../pages/About/About";
import Blog from "../../pages/Blog/Blog";
import Contact from "../../pages/Contact/Contact";
import Home from "../../pages/Home/Home";
import Portfolio from "../../pages/Portfolio/Portfolio";

const Navbar = () => {
    return (
        <Nav>
            <h1>Navbar Component</h1>
            
            <About />
            <Blog />
            <Contact />
            <Home />
            <Portfolio />
            
        </Nav>
    )
}
const Nav = styled.div``;



export default Navbar
