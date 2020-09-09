import styled from "@emotion/styled";
import { minWidthMQ } from "../styles/mediaQueries";

const StyledImage = styled.img`
    border-radius: 50%/50%;
    width: 300px;
    max-width: 100%;

    ${minWidthMQ[1]} {
        width: 350px;
        margin-bottom: 25%;
        grid-area: 1 / 2 / 3 / 3;
        place-self: center;
    }

    ${minWidthMQ[2]} {
        width: 400px;
        margin-bottom: 25%;
    }
`;

const HeroImage = () => {
    return <StyledImage src="hero.jpg" />;
};

export default HeroImage;
