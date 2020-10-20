import styled from "@emotion/styled";

export default styled.div`
	margin: 2.5em auto;
	width: 100px;
	display: flex;
	justify-content: space-between;

	& span {
		display: inline-block;
		height: 5px;
		width: 5px;
		// TODO: Why can you not set this without the undefined check?
		background-color: ${props =>
			props.theme.separator &&
			props.theme.separator[props.type].background};
		border-radius: 50%;
	}
`;
