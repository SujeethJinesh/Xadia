import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

import { logoImage } from './../img';

/**
 * Container for Logo in Navbar
 */
const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.25em;
    color: white;
    text-decoration: none;
    a:link {
      text-decoration: none;
    }
`;

/**
 * Logo for Navbar
 */
const Logo = styled.img`
    src: url(${props => props.src});
    width: 50px;
    height: 50px;
`;

/**
 * Logo Text for Navbar
 */
const LogoText = styled.div`
    margin-left: 1rem;
    text-decoration: none;
    font-size: 24px;
    a:link {
      text-decoration: none;
    }
    &:hover {
        color: palevioletred;
    }
`;

/**
 * Nav bar styling.
 */
const Nav = styled.nav`
`;

/**
 * Unordered list styling
 */
const UL = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
`;

/**
 * Container for buttons
 */
const ButtonContainer = styled.div`
    color: white;
    text-decoration: none;
    padding: 1rem;
`;

/**
 * Text button on left side of navbar's styling
 */
const TextButton = styled.input.attrs(({ value }) => ({
    // we can define static props
    type: "button",
    value: value,
  }))`
    color: white;
    background-color: transparent;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 24px;
    cursor: pointer;
    text-align: right;
    justify-content: right;
    flex: 1;
    line-height: normal;
    margin: 0;
    min-width: 0;
    padding: 5px 1.5rem 5px 1.5rem;
    vertical-align: baseline;
    border: none;
    font-family: Josefin Sans, sans-serif;
    &:hover {
        color: palevioletred;
    }
  `;

/**
 * Main Header styling for Navbar
 */
const MainHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

/**
 * Navbar class for the pages.
 */
class Navbar extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <MainHeader>
                <p>
                    <form action="">
                            <Link to='/'>
                                <LogoContainer>
                                    <Logo src={logoImage}></Logo>
                                    <LogoText>Xadia</LogoText>
                                </LogoContainer>
                            </Link>
                    </form>
                </p>
                <Nav>
                    <UL>
                        <li>
                            <form action="">
                                <Link to='/'>
                                    <ButtonContainer>
                                        <TextButton value="Home"/>                                     
                                    </ButtonContainer>
                                </Link>
                            </form>
                        </li>
                        <li>
                            <form action="">
                                <Link to='/'>
                                    <ButtonContainer>
                                        <TextButton value="About Us"/>                                     
                                    </ButtonContainer>
                                </Link>
                            </form>
                        </li>
                        <li>
                            <form action="">
                                <Link to='/'>
                                    <ButtonContainer>
                                        <TextButton value="Contact"/>                                     
                                    </ButtonContainer>
                                </Link>
                            </form>
                        </li>
                    </UL>
                </Nav>
            </MainHeader>
        );
    }
}

export default Navbar;
