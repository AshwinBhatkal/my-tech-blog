import Link from "next/link";
import styled from "@emotion/styled";
import { useDispatch } from "../store";
import types from "../store/actionTypes";
import { minWidthMQ } from "../styles/mediaQueries";

const StyledButton = styled.a`
    color: ${(props) => props.theme.button[props.type].color};
    background: ${(props) => props.theme.button[props.type].background};
    padding: 0.25em 1.75em;
    font-weight: 700;
    font-size: 1.25rem;
    border-radius: 50px;
    text-align: center;
    border: ${(props) => `2px solid ${props.theme.button[props.type].border}`};

    ${minWidthMQ[2]} {
        font-size: 1.5rem;
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
