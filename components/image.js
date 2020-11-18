import styled from "@emotion/styled";

const StyledImage = styled.img`
    display: block;
    width: 100%;
    height: auto;
    padding: 0.75em 0;
`;

const Image = ({ src, alt }) => (
    <StyledImage src={src} alt={alt}/>
);

export default Image;
