import React, { createContext, useState, useEffect } from 'react';
import { locationRequest, locationTransform } from './location.service';

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
	const [location, setLocation] = useState(null);
	const [keyword, setKeyword] = useState('San Francisco');
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const onSearch = (searchKeyword) => {
		setIsLoading(true);
		setKeyword(searchKeyword);
	};

	useEffect(() => {
		if (!keyword) {
			return;
		}
		locationRequest(keyword.toLowerCase())
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
	}, [keyword]);

	return (
		<LocationContext.Provider
			value={{ location, keyword, isLoading, error, search: onSearch }}>
			{children}
		</LocationContext.Provider>
	);
};
