import React from "react";
import { ThemeProvider } from "emotion-theming";
import { theme } from "../styles/theme";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    options: {
        storySort: (a, b) =>
            a[1].kind === b[1].kind
                ? 0
                : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
    },
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
};

export const decorators = [
    (Story) => (
        <ThemeProvider theme={theme["light"]}>
            <Story />
        </ThemeProvider>
    ),
];
