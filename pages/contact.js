import Head from "next/head";
import Container from "../components/container";
import Main from "../components/main";

export default function Contact() {
    return (
        <Main>
            <Container>
                <Head>
                    <title>Contact</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <div style={{ textAlign: "justify" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat numquam
                    incidunt fuga quo neque blanditiis. Rerum necessitatibus, eos minus cumque odio
                    ipsa maxime iusto earum, dolores iure nam consequatur soluta a consectetur
                    ratione similique ea voluptates corporis facilis ipsum. Dicta officia doloremque
                    aliquam omnis libero alias enim ipsum ut quidem inventore, excepturi officiis
                    distinctio vero. Eaque blanditiis odit maiores, quia et dignissimos in soluta,
                    voluptatum facilis, corporis dolore. Nihil esse optio exercitationem voluptas
                    magnam veritatis.
                </div>
            </Container>
        </Main>
    );
}
