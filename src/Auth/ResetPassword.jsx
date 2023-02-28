import { useState } from "react";

export default function ResetPassword({ onSubmit }) {
	const [username, setUsername] = useState("");
	const [code, setCode] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		onSubmit({ username, code, newPassword, confirmPassword });
	};

	return (
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
	);
}
