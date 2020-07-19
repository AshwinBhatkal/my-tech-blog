import Head from "next/head";
import Container from "../components/container";
import Main from "../components/main";

export default function Blog() {
    return (
        <Main>
            <Container>
                <Head>
                    <title>Ashwin's Blog</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <div style={{ textAlign: "justify" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, assumenda
                    ipsum distinctio labore asperiores sint ad numquam aperiam molestias maxime. Eos
                    obcaecati perferendis doloremque molestias, laborum totam libero accusantium
                    repellat voluptatem laboriosam mollitia aliquid assumenda atque deleniti magnam
                    maxime dicta sapiente iure fugit suscipit consectetur iste. Beatae repellendus
                    reiciendis maiores doloribus. Quae, non eius! Nihil temporibus veritatis
                    laboriosam at hic omnis, dolor voluptatem cum nobis inventore? Sed natus
                    mollitia labore repellat, reiciendis perferendis, nisi dolore qui dignissimos
                    placeat nemo quos aliquid at sit itaque delectus ullam est officiis nulla autem
                    iusto quae? Eveniet nemo laudantium esse quod mollitia quo rerum ex perferendis
                    autem eum, placeat libero quis magni magnam saepe sequi quas ipsum vel ut maxime
                    expedita, nobis est enim! Ex ipsa minima quae ratione sunt eum laborum.
                    Exercitationem nostrum itaque dicta atque enim libero, dolorem voluptas
                    architecto quia delectus repellendus modi debitis assumenda dolor quibusdam
                    velit suscipit, ipsam quasi eum! Voluptatum magni sunt exercitationem beatae
                    quos quia sapiente. Maiores, obcaecati harum? Autem illum, omnis incidunt
                    architecto nobis iste odit animi magni error officia eligendi modi aliquam,
                    molestiae tempora voluptate officiis aliquid ipsam perferendis iusto quod!
                    Magnam exercitationem rem tempora aperiam saepe mollitia animi voluptatum. Quae
                    veniam deserunt eveniet consectetur.
                </div>
            </Container>
        </Main>
    );
}
