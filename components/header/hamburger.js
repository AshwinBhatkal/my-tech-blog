import styled from "@emotion/styled";
import { minWidthMQ } from "../../styles/mediaQueries";
import { useDispatch, useTrackedState } from "../../store";
import types from "../../store/actionTypes";

const StyledHamburger = styled.div`
    & {
        display: block;
        position: relative;
        background-color: ${(props) => props?.navOpen ? "transparent" : props?.theme?.colors?.cuatro};
    }

    &,
    &::before,
    &::after {
        width: 1.75em;
        height: 3px;
        border-radius: 1em;
        transition: all 0.4s ease;
    }

    &::before,
    &::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        opacity: 1;
        background-color: ${(props) => props?.theme?.colors?.cuatro};
    }

    &::before {
        top: ${(props) => props?.navOpen ? "0rem" : "0.5rem"};
        transform: ${(props) => props?.navOpen ? "rotate(405deg)" : "rotate(0deg)"};
    }
    &::after {
        bottom: ${(props) => props?.navOpen ? "0rem" : "0.5rem"};
        transform: ${(props) => props?.navOpen ? "rotate(-405deg)" : "rotate(0deg)"};
    }

    ${minWidthMQ[1]} {
        display: none;
    }
`;

const Hamburger = ({ navOpen }) => {
    const dispatch = useDispatch();
    const toggleNav = () => {
        dispatch({
            type: types.TOGGLE_NAV,
            navOpen: !navOpen,
        });
    };
    return <StyledHamburger navOpen={navOpen} onClick={toggleNav} />;
};

export default Hamburger;
