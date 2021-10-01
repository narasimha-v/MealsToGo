import React, { createContext, useState } from 'react';
import { locationRequest, locationTransform } from './location.service';

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
	const [location, setLocation] = useState(null);
	const [keyword, setKeyword] = useState('San Francisco');
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const onSearch = (searchKeyword) => {
		if (!searchKeyword) {
			return;
		}
		setIsLoading(true);
		setKeyword(searchKeyword);
		locationRequest(searchKeyword.toLowerCase())
			.then(locationTransform)
			.then((res) => {
				setIsLoading(false);
				setLocation(res);
				setError(null);
			})
			.catch((err) => {
				setIsLoading(false);
				setLocation(null);
				setError(err);
			});
	};

	return (
		<LocationContext.Provider
			value={{ location, keyword, isLoading, error, search: onSearch }}>
			{children}
		</LocationContext.Provider>
	);
};
