import Link from "next/link";
import LimitingContainer from "../../components/limitingContainer";
import Page from "../../components/page";
import styled from "@emotion/styled";
import { headerOffset } from "../../styles/sizes";

const gridGap = "20px";

const ComponentContainer = styled.div`
    width: 100%;
    min-height: calc(100vh - ${headerOffset} - 2em);
    display: grid;
    grid-gap: ${gridGap};
    justify-items: center;
    align-items: center;
`;

export default function Contact() {
    return (
        <Page>
            <LimitingContainer index={2}>
                <ComponentContainer>
                    <div>
                        Page in development.
                        Click&nbsp;
                        <Link href="/blog/web-design-and-branding">
                            <a>here</a>
                        </Link>
                        &nbsp;to redirect.
                    </div>
                </ComponentContainer>
            </LimitingContainer>
        </Page>
    );
}
