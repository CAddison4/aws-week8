import SignupForm from "./Auth/SignupForm";
import LoginForm from "./Auth/LoginForm";
import ForgotPassword from "./Auth/ForgotPassword";
import ResetPassword from "./Auth/ResetPassword";
import "./index.css";

import { Link } from "react-router-dom";

export default function Header() {
	return (
		<div className="fixed top-0 w-full bg-gray-200 py-4 flex gap-4 ml-4">
			<Link
				to="/signup"
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
				Signup
			</Link>
			<Link
				to="/login"
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
				Login
			</Link>
			<Link
				to="/forgot-password"
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
				Forgot Password
			</Link>
		</div>
	);
}
