import styled from "styled-components/macro";
import React from 'react'
import { Link } from "react-router-dom";
import './styles/Navbar.Styles.css'

const Navbar = () => {
    return (
        <Nav className="navbar">
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link className="active" to="/">Home</Link>
        </Nav>
    )
}
const Nav = styled.div``;



export default Navbar
