import Head from "next/head";
import styled from "@emotion/styled";
import Container from "../components/container";

const StyledMain = styled.main`
    position: absolute;
    top: calc(2em + 2.5rem);
`;

export default function Contact() {
    return (
        <StyledMain>
            <Container>
                <Head>
                    <title>Contact</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <span>Ashwin</span>
            </Container>
        </StyledMain>
    );
}
