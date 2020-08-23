import Head from "next/head";
import Container from "../../../components/container";
import Main from "../../../components/main";
import Image from "../components/image";
import { HorizontalDivider } from "../../../components/horizontalDivider";

export default function Home() {
    return (
        <Main>
            <Container flexRow={"column"}>
                <Head>
                    <title>Web Design and Branding</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <h1>Web Design and Branding: A Brief Introduction</h1>
                <Image src="/landing.png" alt="Landing Image" />
                <p>
                    It was not until I started designing my website that I realized the nuances that
                    go into designing &#8213; websites, posters, TV ads, brand logos, magazines,
                    catalogs, and whatnot. Let me tell you &#8213; It's not easy! 
                </p>
                <p>
                    Well, it may be because I have barely started designing, and quite early enough,
                    I have come to appreciate the work that goes into creating something that not
                    only catches attention but also stands for the brand identity.
                </p>
                <p>
                    Branding is the process of creating a loyal relationship between a company, and
                    it's customers. Various factors contribute to this process. With website design
                    and the logo being obvious guesses, various other factors can contribute to
                    building the brand, such as{" "}
                    <i>
                        customer expectations meeting reality, wonderful customer experiences,
                        quality product, good employee behavior, etc
                    </i>
                    . The companies/individuals that excel in the stated factors stand out as a
                    brand, while the others are discarded.
                </p>
                <p>
                    Creating a brand experience is crucial to maintain the reputation of the brand,
                    and every single one of the Fortune 500 companies understands that their website
                    plays a vital role in upholding this reputation. Hence, they are continually
                    evolving and ensuring that their website is clean and easy to use and, more
                    importantly, representing the values that they stand for. 
                </p>
                <h2>Designing a website to create a brand identity</h2>
                <p>
                    It all starts with identifying a clear message that is to be associated with the
                    brand, and quite often, the designer would spend hours, days, or even weeks in
                    research. Everyone from the CEO to the guy in the mailroom could be interviewed
                    to understand the varying levels of perception that each employee has of the
                    company. Moreover, if there exists a customer base, trying to understand the
                    customer's expectations would also prove beneficial.
                </p>
                <p>Ultimately, the following questions would need to be answered:</p>
                <ol>
                    <li>
                        What is the current brand strategy? If there is one, what is working and
                        what isn't?
                    </li>
                    <li>
                        What does the client want to communicate? What should be the brand message?
                    </li>
                    <li>Who are the current customers vs. who are the ideal customers?</li>
                    <li>What are the company values?</li>
                </ol>
                <p>
                    In the process of interviewing the involved stakeholders, it is essential to
                    have a neutral conversation to get information rather than interrogate them.
                </p>
                <HorizontalDivider />
                <p>
                    Once we have all the answers to the questions, we move on to define the brand
                    values that the client stands for and, in doing so, choose the styling elements
                    to enforce the brand message.
                </p>
                <blockquote>
                    Being consistent with the styling strongly enforces the brand message.
                </blockquote>
                <h3>Color Palette</h3>
                <p>
                    The importance of choosing a color palette that signifies the brand value cannot
                    be less stressed upon. According to color psychology, human perception changes
                    with color, and if the target audience fails to associate with the brand value,
                    could there be a brand?
                </p>
                <blockquote>Upcoming: Choosing colors for your brand</blockquote>
                <p>
                    Also, not all colors go with each other, and this where the infamous color
                    theory helps us choose compatible colors. For instance, let us take a shade of
                    the color yellow(#FFCB05) and use it as the font color for a small block. At the
                    same time, let's have three different colors for the background.
                </p>
                <Image src="/color-combination.png" alt="Color Combinations" />
                <p>
                    The first block may not be something you would come across because designers
                    understand the fact that it has absolutely no contrast. The second block has
                    decent contrast, but it is stressful to keep looking at the font. The third
                    block has contrast and is also pleasing to the eye. Or we could say the colors
                    are compatible. Could this be a brand color? 😉
                </p>
                <h3>Fonts</h3>
                <p>
                    The next step includes choosing the fonts(or Typeface). Like color psychology,
                    font psychology states that fonts affect the thoughts, behaviors, and feelings
                    of an individual. If so, you would need to pay close attention to what feelings
                    does the client wants to invoke in their customers and choose the appropriate
                    font. 
                </p>
                <blockquote>Upcoming: Choosing fonts for your brand</blockquote>
                <p>
                    However, a font that generates the target feelings is not enough; it should be
                    human-readable as well. Let's take an example to understand human-readability.
                    In this case, let's take the somewhat sane color combination of the third block
                    from the previous image and change the font for it.
                </p>
                <Image src="/font-comparison.png" alt="Comparing fonts for a color palette" />
                <p>
                    For the same color combination, the text in the third block stands out. Making
                    sense?
                </p>
                <blockquote>
                    A color palette may be suitable for a particular font but may not be ideal for
                    others. It takes a bit of experimenting to land with the right combination of
                    the color palette and a suitable font.
                </blockquote>
                <h3>The Logo</h3>
                <p>
                    Once the color palette and fonts have been selected, most of the brand essence
                    has been captured. The next thing would be to create a suitable logo, and
                    contrary to popular opinion, the logo is not the brand. It is the ecosystem
                    built around the product experiences that lead to the creation of the brand, and
                    the logo serves as a way to relate with it quickly. What if you had seen the
                    letter &ldquo;f&rdquo; on a blue square block before Facebook launched itself? Would it mean
                    anything?
                </p>
                <blockquote>Upcoming: Choosing a logo for your brand.</blockquote>
                <h3>Others</h3>
                <p>
                    Various other styling elements are to be kept in mind as well. They may not
                    enforce the brand message but certainly provide a great user experience(UX) or
                    (in branding terms) customer experience. Elements such as margins, border, line
                    heights, responsiveness, negative spaces, images, etc. play their part.
                </p>
                <h2>Conclusion</h2>
                <p>
                    Once you have defined the styling elements to be in line with the brand values,
                    you start brainstorming ideas from the client requirements and create n number
                    of prototypes, which are then tested by the client. There is a constant feedback
                    loop that runs throughout the process. If there was some error while gathering
                    the requirements, the entire process might need to be repeated. But this time,
                    with specific questions as you would already have notes from the previous
                    sessions.
                </p>
                <p>
                    With all requirements met, prototype approved, tests performed, and product
                    development complete, the customer can finally use the product. It is here that
                    the customer experience and emotions are at the forefront, and if all goes well,
                    it may become the seed for the creation of your brand.
                </p>
                <blockquote>
                    PS: You can also find this post on <a href="#">Medium</a>
                </blockquote>
            </Container>
        </Main>
    );
}
