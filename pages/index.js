import Head from "next/head";
import Container from "../components/container";
import Main from "../components/main";

export default function Home() {
    return (
        <Main>
            <Container>
                <Head>
                    <title>Ashwin Bhatkal</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <div style={{ textAlign: "justify" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quae labore
                    delectus aspernatur molestiae blanditiis, repellat doloremque architecto iste
                    doloribus totam harum sequi repudiandae provident libero possimus, eaque qui
                    magni placeat, culpa natus amet numquam. Laborum, porro iusto magni tempore
                    quibusdam debitis atque beatae maxime asperiores consectetur eaque iste
                    explicabo ipsum molestias voluptatem ipsa ex corporis provident facilis totam
                    obcaecati nostrum eveniet voluptatibus ad. Saepe inventore debitis aliquid
                    ratione eius officia sunt suscipit a eos neque, tempore illum numquam dolore
                    accusamus beatae eveniet magnam deleniti assumenda consectetur maxime, quam odio
                    nihil delectus? Fuga quos culpa placeat veniam? Earum, maiores quibusdam.
                </div>
            </Container>
        </Main>
    );
}
