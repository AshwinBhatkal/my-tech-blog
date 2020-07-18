import styled from "@emotion/styled";
import { breakpoints, minWidthMQ } from "../styles/mediaQueries";

const StyledContainer = styled.div`
    width: 100%;
    max-width: ${breakpoints[1]};
    margin: 0 auto;
    padding: 0 1em;
    display: flex;
    flex-direction: ${(props) => props?.flexRow};
    justify-content: space-between;
    align-items: center;

    ${minWidthMQ[2]} {
        max-width: ${breakpoints[1]};
    }

    ${minWidthMQ[3]} {
        max-width: ${breakpoints[2]};
    }
`;

const Container = ({ children }) => <StyledContainer>{children}</StyledContainer>;

export default Container;
