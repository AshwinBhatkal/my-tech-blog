import styled from "@emotion/styled";
import { minWidthMQ } from "../../styles/mediaQueries";

export default styled.a`
	background: ${props => props.theme.button[props.type].background};
	color: ${props => props.theme.button[props.type].color};
	padding: 0.25em 1.75em;
	font-weight: ${props => props.weight};
	border-radius: 50px;
	border: ${props => `2px solid ${props.theme.button[props.type].border}`};
	outline: none;
	cursor: pointer;

	${minWidthMQ[2]} {
		font-size: ${props => props.size};
	}
`;
