import styled from "@emotion/styled";
import Hamburger from "./hamburger";
import Logo from "./logo";
import Nav from "./nav";
import LimitingContainer from "../limitingContainer";

const StyledHeader = styled.header`
    background: ${(props) => props?.theme?.primary};
    padding: 1.25rem 0;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 20;
    font-size: 1.25rem;
`;

const ComponentContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LogoContainer = styled.div`
    width: 180px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${props => props.theme.secondary};
    font-family: "Fondamento", sans-serif;
`;

export const Header = () => {
    return (
        <StyledHeader>
            <LimitingContainer index={3}>
                <ComponentContainer>
                    <LogoContainer>
                        <Logo />
                        ashwinbhatkal
                    </LogoContainer>
                    <Nav />
                    <Hamburger />
                </ComponentContainer>
            </LimitingContainer>
        </StyledHeader>
    );
};
