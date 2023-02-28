import { createContext } from "react";
import { useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
	const [user, setUser] = useState(null);

	// useEffect(() => {
	// 	// use effect code can cause side effects
	// 	// can interact with the outside world
	// 	// will always run inside the browser

	// }, []);

	return (
		<AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
	);
}
