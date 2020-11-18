import styled from "@emotion/styled";
import Link from "next/link";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export default function Custom404() {
    return (
        <StyledDiv>
            <div>Being smart I see. 😎 </div>
            <div> Only 1 page available for now. Others still in development.</div>
            <div>
                Click&nbsp;
                <Link href="/blog/web-design-and-branding">
                    <a>here</a>
                </Link>
                &nbsp;to redirect.
            </div>
        </StyledDiv>
    );
}
