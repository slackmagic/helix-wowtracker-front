import "./theme.css";
import { createMuiTheme } from "@material-ui/core";

const mainTheme = createMuiTheme({
	palette: {
		common: { black: "#000", white: "#fff" },
		background: {
			/*
			https://material.io/design/material-studies/rally.html#color
			*/
			appbar: "#161616",
			sidebar: "#161616",
			paper: "#161616",
		},
		primary: {
			//GREEN
			light: "#37efba",
			main: "#161616",
			dark: "#045d56",
			contrastText: "#fff",
		},
		secondary: {
			//BLUE
			light: "#4dabf5",
			main: "#2196f3",
			dark: "#1769aa",
			contrastText: "#fff",
		},
		error: {
			light: "#e57373",
			main: "#f44336",
			dark: "#d32f2f",
			contrastText: "#fff",
		},
		text: {
			primary: "#161616",
			secondary: "rgba(0, 0, 0, 0.54)",
			disabled: "rgba(0, 0, 0, 0.38)",
			hint: "rgba(0, 0, 0, 0.38)",
		},
	},
	typography: {
		useNextVariants: true,
		fontStyle: "regular",
		fontFamily: ["Roboto Condensed", "Roboto", "Roboto Slab"].join(","),
	},
});
export default mainTheme;
