import Link from "next/link";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { useDispatch } from "../../store";
import types from "../../store/actionTypes";
import { minWidthMQ, maxWidthMQ } from "../../styles/mediaQueries";

const StyledLink = styled.a`
    text-decoration: none;
    color: ${(props) =>
        props.isLinkActive ? props?.theme?.secondary : props?.theme?.white};

    &:hover,
    &:focus {
        color: ${(props) => props?.theme?.secondary};
    }

    ${minWidthMQ[1]} {
        &:not(:last-child) {
            margin-right: 2em;
        }
    }

    ${maxWidthMQ[1]} {
        height: 100%;
        width: 100%;
        border-top: ${props => `2px solid ${props?.theme?.accent}`};
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const NavLink = ({ href, name, children }) => {
    const router = useRouter();
    const isLinkActive = router.pathname === href ? true : false;
    const dispatch = useDispatch();
    return (
        <Link href={href} passHref>
            <StyledLink
                isLinkActive={isLinkActive}
                onClick={() =>
                    dispatch({
                        type: types.TOGGLE_NAV,
                        navOpen: false,
                    })
                }>
                {name || children}
            </StyledLink>
        </Link>
    );
};

export default NavLink;
