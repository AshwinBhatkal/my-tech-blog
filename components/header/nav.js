import styled from "@emotion/styled";
import { maxWidthMQ } from "../../styles/mediaQueries";
import { useTrackedState } from "../../store";
import NavLink from "./navLink";
import { headerOffset } from "../../styles/sizes";

const StyledNav = styled.nav`
    display: flex;
    text-transform: uppercase;

    ${maxWidthMQ[1]} {
        display: ${(props) => (props.navOpen ? "flex" : "none")};
        background: ${(props) => props?.theme?.primary};
        width: 50%;
        height: calc((100vh - ${headerOffset}) / 2);
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        position: absolute;
        top: ${headerOffset};
        right: 0;
        z-index: 15;
    }
`;

const Nav = () => {
    const { navOpen } = useTrackedState();
    return (
        <StyledNav navOpen={navOpen}>
            <NavLink href="/" name="Home" />
            <NavLink href="/about" name="About" />
            <NavLink href="/blog" name="Blog" />
            <NavLink href="/contact" name="Contact" />
        </StyledNav>
    );
};

export default Nav;
