import React, { useState, useEffect } from "react";
import "./login.css";
import {
	Button,
	CssBaseline,
	makeStyles,
	Container,
	Typography,
	TextField,
} from "@material-ui/core";
import { useLocation, useHistory } from "react-router-dom";
import { HelixAuth } from "@slackmagic/helix-service";


function Login() {
	let history = useHistory();
	let location = useLocation();
	let { from } = location.state || { from: { pathname: "/" } };

	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");
	const [isButtonDisabled, setIsButtonDisabled] = useState(true);
	const [error, setError] = useState(false);

	const useStyles = makeStyles((theme) => ({
		paper: {
			marginTop: theme.spacing(8),
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
		},
		avatar: {
			margin: theme.spacing(1),
			backgroundColor: theme.palette.secondary.main,
		},
		form: {
			width: "100%", // Fix IE 11 issue.
			marginTop: theme.spacing(1),
		},
		submit: {
			margin: theme.spacing(3, 0, 2),
		},
	}));

	const classes = useStyles();

	useEffect(() => {
		setIsButtonDisabled(
			login.trim().length === 0 || password.trim().length === 0
		);
	}, [login, password]);

	const handleLogin = () => {
		HelixAuth.authenticate(login.trim(), password.trim(), () => {}).then(
			(data) => {
				setError(!data);
				if (HelixAuth.isAuthenticated()) {
					history.push(from);
				}
			}
		);
	};

	const handleKeyPress = (e) => {
		if (e.keyCode === 13 || e.which === 13) {
			isButtonDisabled || handleLogin();
		}
	};

	return (
		<Container component="main" maxWidth="xs" className="body">
			<CssBaseline />
			<div className={classes.paper}>
				<Typography
					component="h1"
					variant="h2"
					align="center"
					className={classes.mainTitle}
					disableGutters
				>
					<img src="" />
					<br />
					HELIX
				</Typography>

				<Typography component="h1" variant="h5">
					Se connecter
				</Typography>
				<form className={classes.form} noValidate>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="login"
						label="Login"
						name="login"
						autoComplete="login"
						autoFocus
						onChange={(e) => setLogin(e.target.value)}
						onKeyPress={(e) => handleKeyPress(e)}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Mot de passe"
						type="password"
						id="password"
						autoComplete="current-password"
						onChange={(e) => setPassword(e.target.value)}
						onKeyPress={(e) => handleKeyPress(e)}
					/>
					<Button
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						disabled={isButtonDisabled}
						onClick={() => handleLogin()}
					>
						Se connecter
					</Button>
				</form>
			</div>
		</Container>
	);
}

export default Login;
