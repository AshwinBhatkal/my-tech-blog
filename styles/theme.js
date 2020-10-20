import colors from "./colors";

export const theme = {
	light: {
		primary: colors.primary,
		secondary: colors.secondary,
		accent: colors.accent,
		white: colors.white,
		black: colors.black,
		button: {
			primary: {
				background: "transparent",
				border: colors.accent,
				color: colors.primary,
			},
			accent: {
				background: colors.accent,
				border: colors.accent,
				color: colors.primary,
			},
		},
		separator: {
			primary: {
				background: colors.accent,
			},
		},
	},
};
