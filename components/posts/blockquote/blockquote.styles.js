import styled from "@emotion/styled";

export default styled.blockquote`
	border-left: ${props => `5px solid ${props.theme.accent}`};
	margin-left: -1em;
	padding-left: 1em;
	font-style: italic;
`;
