import styled from "@emotion/styled";
import { minWidthMQ } from "../styles/mediaQueries";

const StyledImage = styled.img`
    border-radius: 50%/50%;
    width: 200px;
    max-width: 100%;

    ${minWidthMQ[1]} {
        width: 400px;
    }
`;

const HeroImage = () => {
    return (
        <div>
            <StyledImage src="hero.jpg" />
        </div>
    );
};

export default HeroImage;
