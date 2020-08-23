import styled from "@emotion/styled";
import { breakpoints, minWidthMQ } from "../styles/mediaQueries";

const StyledContainer = styled.div`
    width: 100%;
    max-width: ${breakpoints[1]};
    margin: 0 auto;
    padding: 0 1em;
    display: flex;
    flex-direction: ${(props) => props?.flexRow};
    justify-content: ${(props) => props?.justifyContent};
    align-items: ${(props) => props?.alignItems};

    ${minWidthMQ[2]} {
        max-width: ${breakpoints[1]};
    }

    ${minWidthMQ[3]} {
        max-width: ${breakpoints[1]};
    }
`;

const Container = ({ children, ...props }) => (
    <StyledContainer {...props}>{children}</StyledContainer>
);

export default Container;
