import Head from "next/head";
import Container from "../components/container";
import Main from "../components/main";

export default function About() {
    return (
        <Main>
            <Container>
                <Head>
                    <title>About Me</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <div style={{ textAlign: "justify" }}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque iure
                    incidunt pariatur. Unde, excepturi, voluptatibus rem necessitatibus a nam sint,
                    quis voluptate maiores quae fugiat ab. Natus molestias rerum beatae ad nulla
                    reiciendis sint ipsum, dicta nostrum, ex quia id soluta! Similique vel aliquam
                    veniam consectetur mollitia eum iusto quasi.
                </div>
            </Container>
        </Main>
    );
}
