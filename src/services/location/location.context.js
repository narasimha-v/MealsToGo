import React, { createContext, useState, useEffect } from 'react';
import { locationRequest, locationTransform } from './location.service';

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
	const [location, setLocation] = useState(null);
	const [keyword, setKeyword] = useState('san francisco');
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const onSearch = (searchKeyword) => {
		setIsLoading(true);
		setKeyword(searchKeyword);
		locationRequest(searchKeyword.toLowerCase())
			.then(locationTransform)
			.then((res) => {
				setIsLoading(false);
				setLocation(res);
			})
			.catch((err) => {
				setIsLoading(false);
				setError(err);
			});
	};

	useEffect(() => {
		onSearch(keyword);
	}, [keyword]);

	return (
		<LocationContext.Provider
			value={{ location, keyword, isLoading, error, serach: onSearch }}>
			{children}
		</LocationContext.Provider>
	);
};
