import styled from "@emotion/styled";
import { headerOffset } from "../../styles/sizes";

export default styled.main`
    padding: 1em 0;
    min-height: calc(100vh - ${headerOffset});
    background: ${(props) => props.theme[props.background]};
`;
