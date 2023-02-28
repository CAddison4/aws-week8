import React, { useState } from "react";

export default function SignupForm({ onSubmit }) {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState(null);

	const handleSubmit = (event) => {
		event.preventDefault();
		// console.log("form submitted", username, email, password, confirmPassword);
		handleSignup({ username, email, password, confirmPassword });
		onSubmit({ username, email, password, confirmPassword });

		// do something with the form data
	};

	const handleSignup = async ({
		username,
		email,
		password,
		confirmPassword,
	}) => {
		if (password !== confirmPassword) {
			return alert("Passwords do not match");
		}
		try {
			await cognito.signUp({ username, email, password });
			redirect("/confirm-email");
			// setPage("confirm");
		} catch (error) {
			console.error(error);
			setErrorMessage("Error signing up");
		}
	};

	return (
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
				<label className="block text-gray-700 font-bold mb-2" htmlFor="email">
					Email
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="email"
					type="email"
					placeholder="Enter your email"
					value={email}
					onChange={(event) => setEmail(event.target.value)}
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
			<div className="mb-6">
				<label
					className="block text-gray-700 font-bold mb-2"
					htmlFor="confirm-password">
					Confirm Password
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="confirm-password"
					type="password"
					placeholder="Confirm your password"
					value={confirmPassword}
					onChange={(event) => setConfirmPassword(event.target.value)}
				/>
			</div>
			<div className="flex items-center justify-between">
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					type="submit">
					Sign Up
				</button>
			</div>
		</form>
	);
}
