import React, { createContext, useState } from 'react';

export const FavouritesContext = createContext();

export const FavouritesContextPropvider = ({ children }) => {
	const [favourites, setFavourites] = useState([]);

	const add = (restaurant) => {
		setFavourites([...favourites, restaurant]);
	};

	const remove = (restaurant) => {
		setFavourites(favourites.filter((r) => restaurant.placeId !== r.placeId));
	};

	return (
		<FavouritesContext.Provider
			value={{
				favourites,
				addToFavourites: add,
				removeFromFavourites: remove
			}}>
			{children}
		</FavouritesContext.Provider>
	);
};
