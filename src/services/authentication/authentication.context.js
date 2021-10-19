import React, { createContext, useState } from 'react';
import { loginRequest, registerRequest } from './authentication.service';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const onLogin = async (email, password) => {
		setIsLoading(true);
		try {
			const u = await loginRequest(email, password);
			setUser(u);
			setIsLoading(false);
		} catch (e) {
			setError(e.toString());
			setIsLoading(false);
		}
	};

	const onRegister = async (email, password, repeatedPassword) => {
		setIsLoading(true);
		if (password !== repeatedPassword) {
			setError('Error: Passwords do not match.');
			return;
		}
		try {
			const u = await registerRequest(email, password);
			setUser(u);
			setIsLoading(false);
		} catch (e) {
			setError(e.toString());
			setIsLoading(false);
		}
	};

	return (
		<AuthenticationContext.Provider
			value={{
				isAuthenticated: !!user,
				user,
				isLoading,
				error,
				onLogin,
				onRegister
			}}>
			{children}
		</AuthenticationContext.Provider>
	);
};
