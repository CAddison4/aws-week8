import * as cognito from "./cognito";
import { useEffect, useState } from "react";

export default function HomePage({ onSubmit }) {
	const [errorMessage, setErrorMessage] = useState(null);

	const handleSubmit = (event) => {
		event.preventDefault();
		// console.log("form submitted", username, email, password, confirmPassword);
		onSubmit();
		// do something with the form data
	};

	return (
		<div className="App">
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
