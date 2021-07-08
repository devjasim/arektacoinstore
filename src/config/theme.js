import { createMuiTheme } from "@material-ui/core/styles";

const primaryColor = "#fa6048";
const primaryLight = "#fe8c6a";
const secondaryColor = "#ffbb38";
const textPrimaryColor = "#17181a";
const textSecondaryColor = "#f9fafc";
const whiteColor = "#ffffff";
const blueColor = "#43e667";
const discordColor = "#7289da";
const redColor = "#ff4654";

export default createMuiTheme({
	palette: {
		primary: {
			main: primaryColor,
			light: primaryLight,
		},
		secondary: {
			main: secondaryColor,
			light: whiteColor,
		},
		text: {
			main: textPrimaryColor,
			light: textSecondaryColor,
		},
		common: {
			white: whiteColor,
			blue: blueColor,
			discord: discordColor,
			redColor: redColor,
			grayColor: "#d2d2d2",
			softGray: "#f1f1f1",
			textGray: "#868686",
			lightGray: "#e8e8e8",
		},
	},

	spacing: [1, 1.5, 2, 2.5, 3, 5, 6, 7, 8, 16, 32],

	transitions: {
		duration: {
			shortest: 150,
			shorter: 200,
			short: 250,
			// most basic recommended timing
			standard: 300,
			// this is to be used in complex animations
			complex: 375,
			// recommended when something is entering screen
			enteringScreen: 225,
			// recommended when something is leaving screen
			leavingScreen: 195,
		},

		easing: {
			// This is the most common easing curve.
			easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
			// Objects enter the screen at full velocity from off-screen and
			// slowly decelerate to a resting point.
			easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
			// Objects leave the screen at full velocity. They do not decelerate when off-screen.
			easeIn: "cubic-bezier(0.4, 0, 1, 1)",
			// The sharp curve is used by objects that may return to the screen at any time.
			sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
		},
	},

	typography: {
		fontFamily: ["Roboto", "sans-serif"].join(","),
		color: textPrimaryColor,

		h1: {
			fontWeight: 700,
			fontSize: "2.5rem",
			"@media (max-width: 768px)": {
				fontSize: "2.5rem !important",
			},
		},

		h2: {
			fontWeight: 600,
			fontSize: "2rem",
			lineHeight: "32px",
		},
		h3: {
			fontWeight: 600,
			fontSize: "24px",
			lineHeight: "28px",
		},
		h4: {
			fontWeight: 500,
			fontSize: "20px",
			lineHeight: "24px",
		},
		h5: {
			fontWeight: 500,
			fontSize: "16px",
			lineHeight: "20px",
		},
		h6: {
			fontWeight: 500,
			fontSize: "14px",
			lineHeight: "20px",
		},
		subtitle1: {
			fontSize: "16px",
			lineHeight: "25px",
		},
		subtitle2: {
			fontWeight: 400,
			fontSize: "16px",
		},
		body1: {
			fontSize: "14px",
			fontWeight: "300",
			lineHeight: "1.6rem",
		},
		body2: {
			fontSize: "14px",
		},
		button: {
			fontSize: "14px",
		},
		caption: {
			fontSize: "12px",
		},
		overline: {
			fontSize: "12px",
			fontWeight: 600,
			textTransform: "uppercase",
		},
	},

	overrides: {
		sectionSeparator: {
			padding: "40px 0",
		},

		MuiTypography: {
			root: {
				color: textPrimaryColor,
				letterSpacing: "0.02rem",
			},
		},

		MuiContainer: {
			root: {
				padding: "0 1.4rem !important",
				"&.MuiContainer-maxWidthXl": {
					"@media (min-width: 1367px)": {
						padding: "0 4rem !important",
					},
				},

				"@media (max-width: 768px)": {
					padding: "0 .6rem !important",
				},
			},
		},

		MuiButton: {
			root: {
				borderRadius: "30px",
				fontSize: "1rem",
				textTransform: "initial",

				"&.MuiButton-text": {
					padding: ".5rem 1.8rem",
					transition: ".3s all ease-in-out",
				},

				"&.MuiButtonBase-root": {
					backgroundColor: primaryColor,
					color: whiteColor,
					boxShadow: "none",
					"&:hover": {
						backgroundColor: secondaryColor,
						color: textPrimaryColor,
					},
				},
			},
		},

		MuiPaper: {
			root: {
				padding: "20px",

				"&.MuiPaper-elevation1": {
					boxShadow: "0px 2px 7px rgba(148, 148, 148, .20)",
				},

				"&.MuiPaper-elevation2": {
					boxShadow: "0px 5px 8px rgba(148, 148, 148, .20)",
				},

				"&.MuiPaper-elevation3": {
					boxShadow: "0px 7px 10px rgba(148, 148, 148, .20)",
				},

				"& .MuiPaper-elevation4": {
					boxShadow: "0px 7px 12px rgba(148, 148, 148, .20)",
				},
			},
		},

		MuiOutlinedInput: {
			root: {
				height: 40,
				color: whiteColor,
				borderRadius: 5,
				"& $notchedOutline": {
					borderColor: whiteColor,
				},
				"&:hover:not($disabled):not($focused):not($error) $notchedOutline":
					{
						borderColor: whiteColor,
						// Reset on touch devices, it doesn't add specificity
						"@media (hover: none)": {
							borderColor: whiteColor,
						},
					},
				"&$focused $notchedOutline": {
					borderColor: whiteColor,
					borderWidth: 1,
				},
			},
		},

		MuiInputLabel: {
			root: {
				color: whiteColor,
				"&$focused": {
					color: whiteColor,
				},
				"&$active": {
					color: whiteColor,
				},
			},
			outlined: {
				transform: "translate(10px, 13px) scale(1)",
				"&$shrink": {
					transform: "translate(14px, -5px) scale(0.75)",
				},
			},
		},
	},
});
