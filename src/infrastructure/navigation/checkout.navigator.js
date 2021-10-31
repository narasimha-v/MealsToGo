import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
	CheckoutErrorScreen,
	CheckoutScreen,
	CheckoutSuccessScreen
} from '../../features/checkout/screens';

const CheckoutStack = createStackNavigator();

export const CheckoutNavigator = () => {
	return (
		<CheckoutStack.Navigator headerMode={'none'}>
			<CheckoutStack.Screen name={'Checkout'} component={CheckoutScreen} />
			<CheckoutStack.Screen
				name={'CheckoutSuccess'}
				component={CheckoutSuccessScreen}
			/>
			<CheckoutStack.Screen
				name={'CheckoutError'}
				component={CheckoutErrorScreen}
			/>
		</CheckoutStack.Navigator>
	);
};
