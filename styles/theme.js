import colors from "./colors";

export const theme = {
    light: {
        primary: colors.primary,
        secondary: colors.secondary,
        accent: colors.accent,
        white: colors.white,
        black: colors.black,
        button: {
            regular: {
                color: colors.primary,
                background: "transparent",
                border: colors.accent,
            },
            cta: {
                color: colors.white,
                background: colors.accent,
                border: colors.accent,
            },
        },
    },
};
