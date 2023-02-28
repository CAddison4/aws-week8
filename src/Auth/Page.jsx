import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import HomePage from "../HomePage";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import { useState } from "react";
import * as cognito from "../cognito";

import ConfirmForm from "./ConfirmEmail";

import "../index.css";
import { Link } from "react-router-dom";
export default function Page() {
	const [errorMessage, setErrorMessage] = useState(null);

	const [page, setPage] = useState("signup");

	// const handleSignup = async ({
	// 	username,
	// 	email,
	// 	password,
	// 	confirmPassword,
	// }) => {
	// 	if (password !== confirmPassword) {
	// 		return alert("Passwords do not match");
	// 	}
	// 	try {
	// 		await cognito.signUp({ username, email, password });
	// 		redirect("/confirm-email");
	// 		// setPage("confirm");
	// 	} catch (error) {
	// 		console.error(error);
	// 		setErrorMessage("Error signing up");
	// 	}
	// };

	const handleResetPassword = async ({
		username,
		code,
		newPassword,
		confirmPassword,
	}) => {
		if (newPassword !== confirmPassword) {
			setErrorMessage("Passwords do not match");
			return;
		}

		setErrorMessage("Error resetting password");

		try {
			await cognito.resetPassword({ username, code, newPassword });
			setPage("login");
		} catch (error) {
			console.error(error);
			setErrorMessage("Error resetting password");
		}
	};

	const handleConfirmEmail = async ({ username, code }) => {
		try {
			await cognito.confirmUser({ username, code });
			setPage("login");
		} catch (error) {
			console.error(error);
			setErrorMessage("Error confirming email");
		}
	};

	const handleLogin = async ({ username, password }) => {
		try {
			await cognito.signIn({ username, password });
			setPage("success");
		} catch (error) {
			console.error(error);
			setErrorMessage("Error logging in");
		}
	};

	const handleForgotPassword = async ({ username }) => {
		try {
			await cognito.forgotPassword({ username });
			setPage("reset");
		} catch (error) {
			console.error(error);
			setErrorMessage("Error resetting password");
		}
	};

	const handleSignOut = async () => {
		try {
			await cognito.signOut();
			setPage("login");
		} catch (error) {
			console.error(error);
			setErrorMessage("Error signing out");
		}
	};

	let currentForm = null;
	// switch (page) {
	// 	// case "signup":
	// 	// 	currentForm = <SignupForm onSubmit={handleSignup} />;
	// 	// 	break;
	// 	case "confirm":
	// 		currentForm = <ConfirmForm onSubmit={handleConfirmEmail} />;
	// 		break;
	// 	case "login":
	// 		currentForm = <LoginForm onSubmit={handleLogin} />;
	// 		break;
	// 	case "success":
	// 		currentForm = <HomePage onSubmit={handleSignOut} />;
	// 		break;
	// 	case "reset":
	// 		currentForm = <ResetPassword onSubmit={handleResetPassword} />;
	// 		break;
	// 	case "forgot":
	// 		currentForm = <ForgotPassword onSubmit={handleForgotPassword} />;
	// 		break;
	// 	default:
	// 		// currentForm = <SignupForm onSubmit={handleSignup} />;
	// 		return;
	// }
	return (
		<div className="flex justify-center items-center h-screen">
			<h1>Auth Page</h1>
			<Link to="/signup" className="link">
				Signup
			</Link>
			{/* <SignupForm onSubmit={handleSignup} /> */}
			{currentForm}
			{errorMessage && <p className="text-red-400">{errorMessage}</p>}
			{page === "signup" && (
				<button onClick={() => setPage("login")}>Login</button>
			)}
			{page === "login" && (
				<button onClick={() => setPage("signup")}>Signup</button>
			)}
			<button onClick={() => setPage("forgot")}>Forgot Password</button>
		</div>
	);
}
