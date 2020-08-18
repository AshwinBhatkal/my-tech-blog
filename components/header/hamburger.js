import styled from "@emotion/styled";
import { useDispatch, useTrackedState } from "../../store";
import types from "../../store/actionTypes";
import { minWidthMQ } from "../../styles/mediaQueries";

const StyledHamburger = styled.div`
    & {
        display: block;
        position: relative;
        background-color: ${(props) =>
            props?.navOpen ? "transparent" : props?.theme?.secondary};
    }

    &,
    &::before,
    &::after {
        width: 1.75em;
        height: 3px;
        border-radius: 1em;
        transition: all 0.4s ease;
        border-radius: 50%;
    }

    &::before,
    &::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        opacity: 1;
        background-color: ${(props) => props?.theme?.secondary};
    }

    &::before {
        top: ${(props) => (props?.navOpen ? "0rem" : "0.5rem")};
        transform: ${(props) => (props?.navOpen ? "rotate(225deg)" : "rotate(0deg)")};
    }

    &::after {
        bottom: ${(props) => (props?.navOpen ? "0rem" : "0.5rem")};
        transform: ${(props) => (props?.navOpen ? "rotate(-225deg)" : "rotate(0deg)")};
    }

    ${minWidthMQ[1]} {
        display: none;
    }
`;

const Hamburger = () => {
    const dispatch = useDispatch();
    const { navOpen } = useTrackedState();
    return (
        <StyledHamburger
            navOpen={navOpen}
            onClick={() =>
                dispatch({
                    type: types.TOGGLE_NAV,
                    navOpen: !navOpen,
                })
            }
        />
    );
};

export default Hamburger;
