import React, { useState } from "react";
import * as cognito from "../cognito";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import { Link } from "react-router-dom";

export default function LoginForm() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState(null);
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
		handleLogin({ username, password });
		// do something with the form data
	};

	const handleLogin = async ({ username, password }) => {
		try {
			await cognito.signIn({ username, password });
			navigate("/home");
		} catch (error) {
			console.error(error);
			setErrorMessage("Error logging in");
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
					<label
						className="block text-gray-700 font-bold mb-2"
						htmlFor="password">
						Password
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="password"
						type="password"
						placeholder="Enter your password"
						value={password}
						onChange={(event) => setPassword(event.target.value)}
					/>
				</div>

				<div className="flex items-center justify-between">
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit">
						Login
					</button>
				</div>
			</form>
		</div>
	);
}
