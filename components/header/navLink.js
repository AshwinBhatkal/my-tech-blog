import Link from "next/link";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { useDispatch } from "../../store";
import types from "../../store/actionTypes";
import { minWidthMQ, maxWidthMQ } from "../../styles/mediaQueries";

const StyledLink = styled.a`
    color: ${(props) => (props.isLinkActive ? props?.theme?.white : props?.theme?.accent)};

    &:hover,
    &:focus {
        color: ${(props) => (!props.isLinkActive ? props?.theme?.white : props?.theme?.accent)};
    }

    ${minWidthMQ[1]} {
        &:not(:last-child) {
            margin-right: 2em;
        }
    }
`;

const NavLink = ({ href, name }) => {
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
                {name}
            </StyledLink>
        </Link>
    );
};

export default NavLink;
