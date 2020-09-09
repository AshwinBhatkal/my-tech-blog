import styled from "@emotion/styled";
import { headerOffset } from "../styles/sizes";

const StyledPage = styled.main`
    padding: 1em 0;
    min-height: calc(100vh - ${headerOffset});
    background: ${(props) => props.theme[props.background]};
`;

const Page = ({ children, background }) => (
    <StyledPage background={background}>{children}</StyledPage>
);

export default Page;
