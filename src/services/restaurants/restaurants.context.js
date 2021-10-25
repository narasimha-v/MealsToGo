import React, { createContext, useContext, useEffect, useState } from 'react';
import { LocationContext } from '../location/index';
import { restaurantRequest, restaurantTransform } from './restaurants.service';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
	const [restaurants, setRestaurants] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const { location } = useContext(LocationContext);

	useEffect(() => {
		const retrieveRestaurants = async (loc) => {
			setIsLoading(true);
			setRestaurants([]);
			try {
				const res = await restaurantRequest(loc);
				const transformedRes = restaurantTransform(res);
				setRestaurants(transformedRes);
			} catch (err) {
				setError(err);
			} finally {
				setIsLoading(false);
			}
		};

		if (location) {
			retrieveRestaurants(`${location.lat},${location.lng}`);
		}
	}, [location]);

	return (
		<RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
			{children}
		</RestaurantsContext.Provider>
	);
};
