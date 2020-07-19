import styled from "@emotion/styled";
import { headerOffset } from "../styles/sizes";

const StyledMain = styled.main`
    position: relative;
    top: ${headerOffset};
    padding: 1em 0;
    min-height: calc(100vh - (2 * ${headerOffset}));
`;

const Main = ({ children }) => <StyledMain>{children}</StyledMain>;

export default Main;