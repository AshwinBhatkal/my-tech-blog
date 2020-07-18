import styled from "@emotion/styled";
import Logo from "./logo";
import Container from "../container";
import Hamburger from "./hamburger";
import Nav from "./nav";
import { useTrackedState } from "../../store";

const StyledHeader = styled.header`
    background: ${(props) => props?.theme?.colors?.uno};
    color: ${(props) => props?.theme?.colors?.cuatro};
    padding: 1em 0;
    position: fixed;
    width: 100%;
    top: 0;
`;

export const Header = () => {
    const { navOpen } = useTrackedState();
    return (
        <StyledHeader>
            <Container flexRow={true}>
                <Logo />
                <Nav navOpen={navOpen}>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Blog</a>
                    <a href="#">Contact</a>
                </Nav>
                <Hamburger navOpen={navOpen} />
            </Container>
        </StyledHeader>
    );
};
