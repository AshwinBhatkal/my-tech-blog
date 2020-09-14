import { Global, css } from "@emotion/core";
import { withTheme } from "emotion-theming";
import { minWidthMQ } from "./mediaQueries";
import { headerStyles } from "./utils";

const formGlobalStyles = (theme) => css`
    body {
        background: ${theme?.white};
        color: ${theme?.primary};
        font-size: 1.125rem;
        height: 100vh;
        font-family: "Halant", serif;
    }

    button {
        font-family: "Halant", serif;
    }

    p {
        margin-bottom: 1.15rem;
        text-align: justify;
        text-justify: inter-word;
    }

    a {
        text-decoration: none;
        color: ${theme?.accent};
    }

    ${"" /* TODO: Add margin bottom to header styles */}
    ${headerStyles("one", 1)};

    ${minWidthMQ[1]} {
        ${headerStyles("two", 1)};
    }

    ${minWidthMQ[2]} {
        ${headerStyles("three", 1)};
    }
`;

const GlobalStyles = withTheme(({ theme }) => <Global styles={formGlobalStyles(theme)} />);

export default GlobalStyles;
