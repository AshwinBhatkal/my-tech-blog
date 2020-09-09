import LimitingContainer from "../components/limitingContainer";
import Page from "../components/page";
import HeroImage from "../components/heroImage";
import styled from "@emotion/styled";
import Button from "../components/button";
import { maxWidthMQ } from "../styles/mediaQueries";

const StyledH1 = styled.h1`
    font-family: Halant, serif;
    width: 100%;

    ${maxWidthMQ[1]} {
        text-align: center;
    }
`;

const ComponentContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-rows: auto;
    row-gap: 20px;
    justify-items: center;
    align-items: center;
`;

export default function Main() {
    return (
        <Page background={"secondary"}>
            <LimitingContainer index={3}>
                <ComponentContainer>
                    <StyledH1>
                        It is not about the number of things you know, it is all about how well you
                        know the things you know.
                    </StyledH1>
                    <HeroImage />
                    <Button href="/blog" type="cta">
                        Check out my blog
                    </Button>
                    <Button href="/about" type="regular">
                        Get to know me
                    </Button>
                    {/* <IntroContainer>
                        <StyledH1>
                            It is not about the number of things you know, it is all about how well
                            you know the things you know.
                        </StyledH1>
                        <ButtonContainer>
                            <CTAButton href="/blog" isMain={true}>
                                Check out my blog
                            </CTAButton>
                            <CTAButton href="/about" isMain={false}>
                                Get to know me
                            </CTAButton>
                        </ButtonContainer>
                    </IntroContainer>
                    <HeroImage /> */}
                </ComponentContainer>
            </LimitingContainer>
        </Page>
    );
}



const IntroContainer = styled.div`
    width: 60%;
    margin-right: 30px;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    & a + a {
        margin-left: 30px;
    }
`;