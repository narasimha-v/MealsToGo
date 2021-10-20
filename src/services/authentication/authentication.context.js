import React, { createContext, useState } from 'react';
import { loginRequest, registerRequest } from './authentication.service';
import * as firebase from 'firebase';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	firebase.auth().onAuthStateChanged((u) => {
		if (u) {
			setUser(u);
		}
	});

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

	const onLogout = () => {
		setUser(null);
		firebase.auth().signOut();
	};

	return (
		<AuthenticationContext.Provider
			value={{
				isAuthenticated: !!user,
				user,
				isLoading,
				error,
				onLogin,
				onRegister,
				onLogout
			}}>
			{children}
		</AuthenticationContext.Provider>
	);
};
