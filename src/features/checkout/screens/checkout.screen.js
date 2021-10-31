import React, { useContext, useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import { Spacer } from '../../../components/spacer';
import { Text } from '../../../components/typography';
import { SafeArea } from '../../../components/utils';
import { CartContext } from '../../../services/cart';
import { payRequest } from '../../../services/checkout';
import { RestaurantInfoCard } from '../../restaurants/Components';
import {
	CartIcon,
	CartIconContainer,
	ClearButton,
	CreditCardInput,
	NameInput,
	PayButton,
	PaymentProcessing
} from '../components';

export const CheckoutScreen = ({ navigation }) => {
	const { cart, restaurant, clearCart } = useContext(CartContext);
	const [sum, setSum] = useState(0);
	const [name, setName] = useState('');
	const [card, setCard] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const onPay = () => {
		if (!card || !card.id) {
			navigation.navigate('CheckoutError', {
				error: 'Please fill in a valid credit card'
			});
			return;
		}
		setIsLoading(true);
		payRequest(card.id, name, sum)
			.then((res) => {
				setIsLoading(false);
				clearCart();
				navigation.navigate('CheckoutSuccess');
			})
			.catch((e) => {
				setIsLoading(false);
				navigation.navigate('CheckoutError', { error: e });
			});
	};

	useEffect(() => {
		if (!cart.length) {
			setSum(0);
		} else {
			setSum(cart.reduce((acc, { price }) => price + acc, 0));
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
			{isLoading && <PaymentProcessing />}
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
					<Text>Total: {sum / 100}</Text>
				</Spacer>
				<NameInput label={'Name'} value={name} onChangeText={setName} />
				<Spacer position={'top'} size={'large'}>
					{name.length > 0 && (
						<CreditCardInput
							name={name}
							onSuccess={setCard}
							onError={navigation.navigate('CheckoutError', {
								error: 'Somehing went wrong processing your credit card'
							})}
						/>
					)}
				</Spacer>
				<Spacer position={'top'} size={'xl'}>
					<PayButton
						disabled={isLoading}
						icon={'cash-usd'}
						mode={'contained'}
						onPress={onPay}>
						Pay
					</PayButton>
					<Spacer position={'top'} size={'large'}>
						<ClearButton
							disabled={isLoading}
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
