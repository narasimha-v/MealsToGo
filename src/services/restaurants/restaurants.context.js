import React, { createContext, useEffect, useState } from 'react';
import { restaurantRequest, restaurantTransform } from './restaurants.service';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
	const [restaurants, setRestaurants] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const retrieveRestaurants = () => {
			setIsLoading(true);
			setTimeout(() => {
				restaurantRequest()
					.then(restaurantTransform)
					.then((res) => {
						setIsLoading(false);
						setRestaurants(res);
					})
					.catch((err) => {
						setIsLoading(false);
						setError(err);
					});
			}, 2000);
		};

		retrieveRestaurants();
	}, []);

	return (
		<RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
			{children}
		</RestaurantsContext.Provider>
	);
};
