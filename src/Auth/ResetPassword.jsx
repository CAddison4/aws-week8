import { useState } from "react";
import * as cognito from "../cognito";
import { useNavigate } from "react-router-dom";
import Header from "../Header";

export default function ResetPassword() {
	const [username, setUsername] = useState("");
	const [code, setCode] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState(null);
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
		handleResetPassword({ username, code, newPassword, confirmPassword });
	};
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
			// setPage("login");
			navigate("/login");
		} catch (error) {
			console.error(error);
			setErrorMessage("Error resetting password");
		}
	};

	return (
		<div className="flex  flex-col justify-center items-center h-screen">
			<Header />
			<form
				onSubmit={handleSubmit}
				className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
				<label className="mb-6 block text-gray-700 text-sm font-bold">
					Username
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						type="text"
						placeholder="Username"
						value={username}
						onChange={(event) => setUsername(event.target.value)}
					/>
				</label>

				<div className="mb-4">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="username">
						Code
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="code"
						type="text"
						placeholder="Code"
						value={code}
						onChange={(event) => setCode(event.target.value)}
					/>
				</div>

				<div className="mb-4">
					<label
						className="block text-gray-700 font-bold mb-2"
						htmlFor="newPassword">
						Password
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="newPassword"
						type="password"
						placeholder="Enter your password"
						value={newPassword}
						onChange={(event) => setNewPassword(event.target.value)}
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
						Confirm
					</button>
				</div>
			</form>
		</div>
	);
}
