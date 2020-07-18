import styled from "@emotion/styled";
import { minWidthMQ } from "../../styles/mediaQueries";

const StyledHamburger = styled.div`
    & {
        display: : block;
        position: relative;
    }

    &, &::before, &::after {
        background-color: ${(props) => props?.theme?.colors?.cuatro};
        width: 1.75em;
        height: 3px;
        border-radius: 1em;
        transition: transform 250ms ease-in-out;
    }

    &::before, &::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
    }

    &::before { top: 0.5rem; }
    &::after { bottom: 0.5rem; }

    ${minWidthMQ[1]} {
        display: none;
    }
`;

const Hamburger = (props) => <StyledHamburger onClick={props.toggleNav}/>;

export default Hamburger