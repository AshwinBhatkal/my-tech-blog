import styled from "@emotion/styled";
import { maxWidthMQ } from "../../styles/mediaQueries";
import { useTrackedState } from "../../store";
import NavLink from "./navLink";
import { headerOffset } from "../../styles/sizes";

const StyledNav = styled.nav`
    display: flex;

    ${maxWidthMQ[1]} {
        background: ${(props) => props?.theme?.primary};
        width: 100%;
        height: calc(100vh - ${headerOffset});
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        position: absolute;
        top: ${headerOffset};
        right: 0;
        transform: ${(props) => (props.navOpen ? "translateX(0)" : "translateX(100%)")};
        transition: transform 0.3s ease-in;
        z-index: 20;
    }
`;

const Nav = () => {
    const { navOpen } = useTrackedState();
    return (
        <StyledNav navOpen={navOpen}>
            <NavLink href="/" name="Home" />
            {/* <NavLink href="/about" name="About" /> */}
            <NavLink href="/blog" name="Blog" />
            {/* <NavLink href="/contact" name="Contact" /> */}
        </StyledNav>
    );
};

export default Nav;
