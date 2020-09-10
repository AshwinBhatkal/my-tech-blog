import styled from "@emotion/styled";
import { breakpoints, minWidthMQ } from "../styles/mediaQueries";

const StyledContainer = styled.div`
    width: 100%;
    max-width: ${(props) => breakpoints[props.index]};
    margin: 0 auto;
    padding: 0 1em;

    ${minWidthMQ[1]} {
        padding: 0 2em;
    }
`;

const LimitingContainer = ({ children, index }) => (
    <StyledContainer index={index}>{children}</StyledContainer>
);

export default LimitingContainer;
