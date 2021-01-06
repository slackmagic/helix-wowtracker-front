import React, { useState, useEffect } from "react";
import CharacterList from "./components/characterList";
import MenuAppBar from "./components/menuAppBar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { HelixWowTracker } from "@slackmagic/helix-service";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import theme from "../theme/theme";
import GoogleFontLoader from "react-google-font-loader";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(14, 0, 6),
		color: "white",
	},
}));

function App() {
	const classes = useStyles();
	const [characters, setCharacters] = useState([]);

	const loadCharacters = () => {
		HelixWowTracker.getCharactersLastData().then((data) => {
			setCharacters(data);
		});
	};

	const refreshCharacters = () => {
		HelixWowTracker.refresh().then((data) => {
			setCharacters(data);
		});
	};

	useEffect(() => {
		loadCharacters();
		//refreshCharacters();
	}, []);

	return (
		<>
			<GoogleFontLoader
				fonts={[
					{ font: "Open Sans", weights: ["400"] },
					{ font: "Eczar", weights: ["500"] },
				]}
			/>
			<ThemeProvider theme={theme}>
				<MenuAppBar />
				<div className={classes.root}>
					<Container maxWidth="lg" >
						<Grid container spacing={3}>
							<Grid item xs={12} >
								<CharacterList list={characters}  />
							</Grid>
						</Grid>
					</Container>
				</div>
			</ThemeProvider>
		</>
	);
}

export default App;
