import styled from "@emotion/styled";
import Logo from "./logo";
import Container from "../container";
import Hamburger from "./hamburger";
import { useState } from "react";
import { maxWidthMQ } from "../../styles/mediaQueries";

const StyledHeader = styled.header`
    background: ${(props) => props?.theme?.colors?.uno};
    color: ${(props) => props?.theme?.colors?.cuatro};
    padding: 1em 0;
    position: fixed;
    width: 100%;
    top: 0;
`;

const StyledNav = styled.nav`
    display: flex;

    a {
        text-decoration: none;
        color: ${(props) => props?.theme?.colors?.cuatro};
        font-family: pokeHollow;
        font-weight: ${(props) => props?.theme?.fontWeight?.bold};

        &:not(:last-child) {
            margin-right: 2em;
        }

        &:hover {
            color: ${(props) => props?.theme?.colors?.cinco};
        }
    }

    ${maxWidthMQ[1]} {
        display: ${(props) => (props.toggle ? "flex" : "none")};
        background: ${(props) => props?.theme?.colors?.uno};
        width: 50%;
        height: calc(100vh - (2em + 2.5rem));
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        position: absolute;
        top: calc(2em + 2.5rem);
        right: 0;
    }
`;

export const Header = () => {
    const [toggle, setToggle] = useState(false);
    const toggleNav = () => setToggle(!toggle);

    return (
        <StyledHeader>
            <Container flexRow={true}>
                <Logo />
                <StyledNav toggle={toggle}>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Blog</a>
                    <a href="#">Contact</a>
                </StyledNav>
                <Hamburger toggleNav={toggleNav} />
            </Container>
        </StyledHeader>
    );
};
