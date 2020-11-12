import React from "react";
import ReactDOM from "react-dom";
import Login from "./login/login";
import App from "./app/App";
import { createBrowserHistory } from "history";
import PrivateRoute from "./privateRoute";
import reportWebVitals from "./reportWebVitals";
import { Router, Route } from "react-router-dom";

ReactDOM.render(
	<>
		<Router history={createBrowserHistory()}>
			<Route path="/login" component={Login} />
			<PrivateRoute exact path="/" component={App} />
		</Router>
	</>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
