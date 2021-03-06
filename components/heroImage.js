import styled from "@emotion/styled";
import { minWidthMQ } from "../styles/mediaQueries";

const StyledImage = styled.img`
    border-radius: 50%/50%;
    width: 300px;
    max-width: 100%;

    ${minWidthMQ[1]} {
        width: 350px;
        grid-area: 1 / 2 / 3 / 3;
        place-self: center;
    }

    ${minWidthMQ[2]} {
        width: 400px;
    }
`;

const HeroImage = () => {
    return <StyledImage src="hero.jpg" />;
};

export default HeroImage;
