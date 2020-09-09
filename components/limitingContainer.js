import styled from "@emotion/styled";
import { breakpoints } from "../styles/mediaQueries";
import { headerOffset } from "../styles/sizes";

const StyledContainer = styled.div`
    width: 100%;
    max-width: ${(props) => breakpoints[props.index]};
    margin: 0 auto;
    padding: 0 1em;
`;

const LimitingContainer = ({ children, index }) => (
    <StyledContainer index={index}>{children}</StyledContainer>
);

export default LimitingContainer;
