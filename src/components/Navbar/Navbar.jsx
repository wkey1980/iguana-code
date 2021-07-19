import styled from "styled-components/macro";
import React from 'react'
import About from "../../pages/About/About";
import Blog from "../../pages/Blog/Blog";
import Contact from "../../pages/Contact/Contact";
import Home from "../../pages/Home/Home";
import Portfolio from "../../pages/Portfolio/Portfolio";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <Nav>
            <h1>Navbar Component</h1>
            
            {/* <About /> */}
            {/* <Blog /> */}
            {/* <Contact /> */}
            {/* <Home /> */}
            {/* <Portfolio /> */}
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/portfolio">Portfolio</Link>
        </Nav>
    )
}
const Nav = styled.div``;



export default Navbar
