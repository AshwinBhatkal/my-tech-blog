import Link from "next/link";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { useDispatch } from "../../store";
import types from "../../store/actionTypes";
import { minWidthMQ } from "../../styles/mediaQueries";

const StyledLink = styled.a`
    text-decoration: none;
    color: ${(props) =>
        props.isLinkActive ? props?.theme?.color?.activeLink : props?.theme?.color?.link};
    font-family: pokeHollow;
    font-weight: bold;

    &:hover,
    &:focus {
        color: ${(props) => props?.theme?.color?.activeLink};
    }

    ${minWidthMQ[1]} {
        &:not(:last-child) {
            margin-right: 2em;
        }
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
