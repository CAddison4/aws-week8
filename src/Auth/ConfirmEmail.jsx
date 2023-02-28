//enter the code you got in your email address
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as cognito from "../cognito";
import Header from "../Header";

export default function ConfirmEmail() {
	const [username, setUsername] = useState("");
	const [code, setCode] = useState("");
	const [errorMessage, setErrorMessage] = useState(null);
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
		// console.log("form submitted", username, email, password, confirmPassword);
		handleConfirmEmail({ username, code });
		// do something with the form data
	};

	const handleConfirmEmail = async ({ username, code }) => {
		try {
			await cognito.confirmUser({ username, code });
			navigate("/login", { state: { username } });
		} catch (error) {
			console.error(error);
			setErrorMessage("Error confirming email");
		}
	};

	return (
		<div className="flex  flex-col justify-center items-center h-screen">
			<Header />
			<form
				onSubmit={handleSubmit}
				className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
				<div className="mb-4">
					<label
						className="block text-gray-700 font-bold mb-2"
						htmlFor="username">
						Username
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="username"
						type="text"
						placeholder="Enter your username"
						value={username}
						onChange={(event) => setUsername(event.target.value)}
					/>
				</div>

				<div className="mb-4">
					<label className="block text-gray-700 font-bold mb-2" htmlFor="code">
						Code
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="code"
						type="text"
						placeholder="Enter your code"
						value={code}
						onChange={(event) => setCode(event.target.value)}
					/>
				</div>

				<div className="flex items-center justify-between">
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit">
						Confirm
					</button>
				</div>
			</form>
		</div>
	);
}
