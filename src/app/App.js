import React, { useState, useEffect } from "react";
import MenuAppBar from "./components/menuAppBar";
import CharacterList from "./components/characterList";
import Container from "@material-ui/core/Container";
import { HelixWowTracker } from "@slackmagic/helix-service";

function App() {
	const [characters, setCharacters] = useState(undefined);
	function loadCharacters() {
		HelixWowTracker.getCharacters().then((data) => {
			setCharacters(data);
		});
	}

	useEffect(() => {
		loadCharacters();
	}, []);

	return (
		<>
			<MenuAppBar />
			<Container>
				<CharacterList />
			</Container>
		</>
	);
}

export default App;
