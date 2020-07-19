import { Global, css } from "@emotion/core";
import { withTheme } from "emotion-theming";
import { minWidthMQ } from "./mediaQueries";

const formGlobalStyles = (theme) => css`
    body {
        background: ${theme?.background?.body};
        color: ${theme?.color?.primary};
        font-size: 1.125rem;
        height: 100vh;
        overflow-x: hidden;
    }

    ${minWidthMQ[1]} {
        body {
            font-size: 1.25rem;
        }
    }

    ${minWidthMQ[2]} {
        body {
            font-size: 1.375rem;
        }
    }
`;

const GlobalStyles = withTheme(({ theme }) => <Global styles={formGlobalStyles(theme)} />);

export default GlobalStyles;