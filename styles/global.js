import { Global, css } from "@emotion/core";
import { withTheme } from "emotion-theming";
import { minWidthMQ, maxWidthMQ } from "./mediaQueries";

const indexMultiplier = {
    one: [1.5, 1.125, 1, 0.875, 0.75],
    two: [1.75, 1.125, 1, 0.875, 0.75],
    three: [2.25, 1.5, 1.125, 1, 0.875],
};

const headerStyles = (index, base) => {
    let styles = {};
    for (let $i = 0; $i < 5; $i++) {
        styles["h" + ($i + 1)] = {
            "font-size": base * indexMultiplier[index][$i] + "rem",
        };
    }
    return styles;
};

const formGlobalStyles = (theme) => css`
    body {
        background: ${theme?.white};
        color: ${theme?.primary};
        font-size: 1.125rem;
        height: 100vh;
        overflow-x: hidden;
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
        font-size: 1rem;
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
