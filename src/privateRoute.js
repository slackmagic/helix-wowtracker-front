import React from "react";
import { Redirect, Route } from "react-router-dom";
import { HelixAuth } from "@slackmagic/helix-service";

function PrivateRoute({ component: Component, ...rest }) {
	return (
		<Route
			{...rest}
			render={({ location }) =>
				HelixAuth.isAuthenticated() ? (
					<Component />
				) : (
					<Redirect to={{ pathname: "/login", state: { from: location } }} />
				)
			}
		/>
	);
}

export default PrivateRoute;
