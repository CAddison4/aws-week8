import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate, useLocation } from "react-router-dom";

export default function AuthRoute({ children }) {
	const { user } = useContext(AuthContext);
	const location = useLocation();
	if (!user) {
		return <Navigate to={{ pathname: "/login", state: { from: location } }} />;
	}

	return children;
}
