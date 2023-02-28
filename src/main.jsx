import React from "react";
import ReactDOM from "react-dom/client";
import App from "./HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./Auth/Page";
import "./index.css";
// import { AuthRoute } from "./AuthRoute";
import { AuthProvider } from "./AuthContext";
import ConfirmEmail from "./Auth/ConfirmEmail";
import ForgotPassword from "./Auth/ForgotPassword";
import ResetPassword from "./Auth/ResetPassword";
import LoginForm from "./Auth/LoginForm";
import SignupForm from "./Auth/SignupForm";
import HomePage from "./HomePage";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<Routes>
					<Route path="/" element={<AuthPage />} />
					<Route path="/login" element={<LoginForm />} />
					<Route path="/signup" element={<SignupForm />} />
					<Route path="/confirm-email" element={<ConfirmEmail />} />
					<Route path="/forgot-password" element={<ForgotPassword />} />
					<Route path="/reset-password" element={<ResetPassword />} />
					{/* <AuthRoute path="/home">
						<HomePage />
					</AuthRoute> */}
					<Route path="/home" element={<HomePage />} />
				</Routes>
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>
);
