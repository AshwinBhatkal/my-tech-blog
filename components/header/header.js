import styled from "@emotion/styled";
import Hamburger from "./hamburger";
import Logo from "./logo";
import Nav from "./nav";
import Container from "../container";

const StyledHeader = styled.header`
    background: ${(props) => props?.theme?.primary};
    padding: 1em 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 20;
`;

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Logo />
                {/* <Nav /> */}
                {/* <Hamburger/> */}
            </Container>
        </StyledHeader>
    );
};
