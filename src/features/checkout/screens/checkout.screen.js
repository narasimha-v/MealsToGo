import React, { useContext } from 'react';
import { Text } from '../../../components/typography';
import { SafeArea } from '../../../components/utils';
import { CartContext } from '../../../services/cart';
import { CartIcon, CartIconContainer, CreditCardInput } from '../components';

export const CheckoutScreen = () => {
	const { cart, restaurant } = useContext(CartContext);

	if (!cart.length || !restaurant) {
		return (
			<SafeArea>
				<CartIconContainer>
					<CartIcon icon={'cart-off'} />
					<Text>Your cart is empty!</Text>
				</CartIconContainer>
			</SafeArea>
		);
	}

	return (
		<SafeArea>
			<Text>{JSON.stringify(cart)}</Text>
			<CreditCardInput />
		</SafeArea>
	);
};
