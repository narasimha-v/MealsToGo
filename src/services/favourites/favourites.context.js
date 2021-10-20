import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthenticationContext } from '../authentication';

export const FavouritesContext = createContext();

export const FavouritesContextPropvider = ({ children }) => {
	const { user } = useContext(AuthenticationContext);
	const [favourites, setFavourites] = useState([]);

	const saveFavourites = async (value, uid) => {
		try {
			const jsonValue = JSON.stringify(value);
			await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
		} catch (e) {
			console.error(e);
		}
	};

	const loadFavourites = async (uid) => {
		try {
			const jsonValue = await AsyncStorage.getItem(`@favourites-${uid}`);
			return jsonValue != null ? setFavourites(JSON.parse(jsonValue)) : null;
		} catch (e) {
			console.error(e);
		}
	};

	const add = (restaurant) => {
		setFavourites([...favourites, restaurant]);
	};

	const remove = (restaurant) => {
		setFavourites(favourites.filter((r) => restaurant.placeId !== r.placeId));
	};

	useEffect(() => {
		if (user) {
			loadFavourites(user.uid);
		}
	}, [user]);

	useEffect(() => {
		if (user) {
			saveFavourites(favourites, user.uid);
		}
	}, [favourites, user]);

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
