import Link from "next/link";
import styled from "@emotion/styled";
import { useDispatch } from "../../store";
import types from "../../store/actionTypes";

const StyledLogo = styled.img`
    height: 2.25rem;
    cursor: pointer;
`;

const Logo = () => {
    const dispatch = useDispatch();
    return (
        <Link href="/" passHref>
            <StyledLogo
                src="/app_logo.svg"
                alt="AB"
                onClick={() =>
                    dispatch({
                        type: types.TOGGLE_NAV,
                        navOpen: false,
                    })
                }
            />
        </Link>
    );
};

export default Logo;
