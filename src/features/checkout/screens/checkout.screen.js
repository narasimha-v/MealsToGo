import React, { useContext, useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import { Spacer } from '../../../components/spacer';
import { Text } from '../../../components/typography';
import { SafeArea } from '../../../components/utils';
import { CartContext } from '../../../services/cart';
import { RestaurantInfoCard } from '../../restaurants/Components';
import {
	CartIcon,
	CartIconContainer,
	ClearButton,
	CreditCardInput,
	NameInput,
	PayButton
} from '../components';

export const CheckoutScreen = () => {
	const { cart, restaurant, clearCart } = useContext(CartContext);
	const [sum, setSum] = useState(0);
	const [name, setName] = useState(null);

	useEffect(() => {
		if (!cart.length) {
			setSum(0);
		} else {
			setSum(cart.reduce((acc, { price }) => price / 100 + acc, 0));
		}
	}, [cart]);

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
			<RestaurantInfoCard restaurant={restaurant} />
			<ScrollView>
				<Spacer position={'left'} size={'medium'}>
					<Spacer position={'top'} size={'large'}>
						<Text>Your Order</Text>
					</Spacer>
					<List.Section>
						{cart.map(({ item, price }, i) => (
							<List.Item key={i} title={`${item} - ${price / 100}`} />
						))}
					</List.Section>
					<Text>Total: {sum}</Text>
				</Spacer>
				<NameInput
					label={'Name'}
					value={name}
					onChangeText={(t) => {
						if (t.length) {
							setName(t);
						} else {
							setName(null);
						}
					}}
				/>
				<Spacer position={'top'} size={'large'}>
					{name && <CreditCardInput name={name} />}
				</Spacer>
				<Spacer position={'top'} size={'xl'}>
					<PayButton icon={'cash-usd'} mode={'contained'}>
						Pay
					</PayButton>
					<Spacer position={'top'} size={'large'}>
						<ClearButton
							icon={'cart-off'}
							mode={'contained'}
							onPress={clearCart}>
							Clear cart
						</ClearButton>
					</Spacer>
				</Spacer>
			</ScrollView>
		</SafeArea>
	);
};
