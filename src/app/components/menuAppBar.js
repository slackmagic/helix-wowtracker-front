import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import Logo from "../../theme/wow_logo.png";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	bottomBar: {
		background: "linear-gradient(0deg, #cf9b53 0%, #a16e3a 100%)",
		minHeight: "10px",
		maxWidth: "100%",
	},
}));

export default function MenuAppBar() {
	const classes = useStyles();

	return (
		<div className={classes}>
			<AppBar className="appBar">
				<Toolbar>
					<img src={Logo} width="200px" />
					<Typography variant="h6" className={classes.title}></Typography>
					<Button variant="contained" color="secondary">Refresh</Button>
				</Toolbar>
				<div className={classes.bottomBar}></div>
			</AppBar>
		</div>
	);
}
