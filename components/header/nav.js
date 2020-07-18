import styled from "@emotion/styled";
import { maxWidthMQ } from "../../styles/mediaQueries";
import { useTrackedState } from "../../store";

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
        background: ${(props) => props?.theme?.colors?.uno};
        width: 50%;
        height: calc(100vh - (2em + 2.5rem));
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        position: absolute;
        top: calc(2em + 2.5rem);
        right: 0;
        transform: ${(props) => (props.navOpen ? "translateX(0)" : "translateX(100%)")};
        transition: transform 0.3s ease-in;
    }
`;

const Nav = ({ children, navOpen }) => {
    return <StyledNav navOpen={navOpen}>{children}</StyledNav>;
};

export default Nav;
