import { Global, css } from "@emotion/core";
import { withTheme } from "emotion-theming";
import { minWidthMQ, maxWidthMQ } from "./mediaQueries";

const formGlobalStyles = (theme) => css`
    body {
        background: ${theme?.white};
        color: ${theme?.primary};
        font-size: 1.125rem;
        height: 100vh;
        overflow-x: hidden;
        font-family: 'Catamaran', serif;
    }
    
    p {
        line-height: 2.25rem;
        padding: 10px 0;
        text-align: justify;
        text-justify: inter-word;
    }

    h1 {
        line-height: 3.5rem;
        padding: 10px 0;
    }

    h2 {
        line-height: 2.75rem;
        padding-top: 20px;
    }

    h3 {
        line-height: 2.5rem;
        padding-top: 15px;
    }

    ol {
        list-style: decimal outside none;
        padding-left: 1em;
    }

    ol li {
        padding-left: 3em;
        line-height: 2.25rem;
    }

    blockquote {
        font-style: italic;
        border-left: 5px solid #48ACF0;
        border-top: 1px solid #0B2027;
        border-bottom: 1px solid #0B2027;
        padding-left: 15px;
        margin: 20px 0;
    }

    a {
        text-decoration: none;
        color: #48ACF0;
    }

    ${maxWidthMQ[1]} {
        ol li {
        padding-left: 1em;
        }
    }

    ${maxWidthMQ[2]} {
        ol li {
        padding-left: 2em;
        }
    }

    ${minWidthMQ[1]} {
        body {
            font-size: 1.25rem;
        }
    }

    ${minWidthMQ[2]} {
        body {
            font-size: 1.3rem;
        }
    }
`;

const GlobalStyles = withTheme(({ theme }) => <Global styles={formGlobalStyles(theme)} />);

export default GlobalStyles;