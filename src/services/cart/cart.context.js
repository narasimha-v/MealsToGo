import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthenticationContext } from '../authentication';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
	const { user } = useContext(AuthenticationContext);
	const [restaurant, setRestaurant] = useState(null);
	const [cart, setCart] = useState([]);

	const saveCart = async (rst, crt, uid) => {
		try {
			const jsonvalue = JSON.stringify({ restaurant: rst, cart: crt });
			await AsyncStorage.setItem(`@cart-${uid}`, jsonvalue);
		} catch (e) {
			console.error(e);
		}
	};

	const loadCart = async (uid) => {
		try {
			const value = await AsyncStorage.getItem(`@cart-${uid}`);
			if (value !== null) {
				const { restaurant: rst, cart: crt } = JSON.parse(value);
				setRestaurant(rst);
				setCart(crt);
			}
		} catch (e) {
			console.error(e);
		}
	};

	useEffect(() => {
		if (user && user.uid) {
			loadCart(user.uid);
		}
	}, [user]);

	useEffect(() => {
		if (user && user.uid) {
			saveCart(restaurant, cart, user.uid);
		}
	}, [restaurant, cart, user]);

	const add = (item, rst) => {
		if (!restaurant || restaurant.placeId !== rst.placeId) {
			setRestaurant(rst);
			setCart([item]);
		} else {
			setCart([...cart, item]);
		}
	};

	const clear = () => {
		setRestaurant(null);
		setCart([]);
	};

	return (
		<CartContext.Provider
			value={{ addToCart: add, clearCart: clear, restaurant, cart }}>
			{children}
		</CartContext.Provider>
	);
};
