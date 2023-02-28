import * as cognito from "./cognito";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

export default function HomePage() {
	const [errorMessage, setErrorMessage] = useState(null);
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
		// console.log("form submitted", username, email, password, confirmPassword);
		handleSignOut();
		// do something with the form data
	};

	const handleSignOut = async () => {
		try {
			await cognito.signOut();
			navigate("/login");
		} catch (error) {
			console.error(error);
			setErrorMessage("Error signing out");
		}
	};

	return (
		<div className="flex  flex-col justify-center items-center h-screen">
			<Header />
			<h1>Welcome Home</h1>

			<div className="flex items-center justify-between">
				<button
					onClick={handleSubmit}
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					type="submit">
					Sign Out
				</button>
			</div>
		</div>
	);
}
