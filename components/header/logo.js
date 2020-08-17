import Link from "next/link";
import styled from "@emotion/styled";
import { useDispatch } from "../../store";
import types from "../../store/actionTypes";
import { minWidthMQ } from "../../styles/mediaQueries";

const StyledLogo = styled.img`
    height: 2.5rem;
    cursor: pointer;

    ${minWidthMQ[1]} {
        transition: all 0.4s ease-in-out;

        :hover {
            transform: rotate(360deg) scale(1.5, 1.5);
        }
    }
`;

const StyledDiv = styled.div`
    height: 2.5rem;
    cursor: pointer;
    color: ${(props) => props?.theme?.secondary};
    display: grid;
    align-items: center;
    justify-items: center;
`;

const Logo = () => {
    const dispatch = useDispatch();
    return (
        <Link href="/" passHref>
            <StyledDiv
                // src="app_logo.svg"
                // alt="AB"
                onClick={() =>
                    dispatch({
                        type: types.TOGGLE_NAV,
                        navOpen: false,
                    })
                }>
                ashwinbhatkal
            </StyledDiv>
        </Link>
    );
};

export default Logo;
