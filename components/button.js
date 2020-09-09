import Link from "next/link";
import styled from "@emotion/styled";
import { useDispatch } from "../store";
import types from "../store/actionTypes";
import { maxWidthMQ } from "../styles/mediaQueries";

const StyledButton = styled.a`
    text-decoration: none;
    color: ${props => props.theme.button[props.type].color};
    background: ${props => props.theme.button[props.type].background};
    padding: 0.25em 1.75em;
    font-weight: 700;
    font-size: 1.5rem;
    border-radius: 50px;
    border: ${props => `3px solid ${props.theme.button[props.type].border}`};

    ${maxWidthMQ[2]} {
        font-size: 1.25rem
    }
`;

const Button = ({ href, children, type }) => {
    const dispatch = useDispatch();
    return (
        <Link href={href} passHref>
            <StyledButton
                type={type}
                onClick={() =>
                    dispatch({
                        type: types.TOGGLE_NAV,
                        navOpen: false,
                    })
                }>
                {children}
            </StyledButton>
        </Link>
    );
};

export default Button;
