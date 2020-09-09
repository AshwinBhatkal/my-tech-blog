import LimitingContainer from "../components/limitingContainer";
import Page from "../components/page";
import HeroImage from "../components/heroImage";
import styled from "@emotion/styled";
import Button from "../components/button";
import { maxWidthMQ, minWidthMQ } from "../styles/mediaQueries";
import { headerOffset } from "../styles/sizes";

const StyledH1 = styled.h1`
    font-family: Halant, serif;
    width: 100%;

    ${maxWidthMQ[1]} {
        text-align: center;
    }
`;

const ComponentContainer = styled.div`
    width: 100%;
    min-height: calc(100vh - ${headerOffset} - 2em);
    display: grid;
    grid-template-rows: auto;
    row-gap: 20px;
    justify-items: center;
    align-items: center;

    ${minWidthMQ[1]} {
        grid-template-columns: auto auto;
        grid-template-rows: 1fr 1fr;
        align-items: end;
    }
`;

const ButtonContainer = styled.div`
    display: grid;
    grid-template-rows: auto auto;
    row-gap: 20px;
    justify-items: center;
    align-items: center;

    ${minWidthMQ[1]} {
        justify-self: start;
        align-self: start;
        display: flex;

        & a:first-child {
            margin-right: 20px;
        }
    }
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
                    <ButtonContainer>
                        <Button href="/blog" type="cta">
                            Check out my blog
                        </Button>
                        <Button href="/about" type="regular">
                            Get to know me
                        </Button>
                    </ButtonContainer>
                </ComponentContainer>
            </LimitingContainer>
        </Page>
    );
}