import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
	AccountScreen,
	LoginScreen,
	RegisterScreen
} from '../../features/account/screens';

const Stack = createStackNavigator();

export const AccountNavigator = () => {
	return (
		<Stack.Navigator headerMode={'none'}>
			<Stack.Screen name={'Welcome'} component={AccountScreen} />
			<Stack.Screen name={'Login'} component={LoginScreen} />
			<Stack.Screen name={'Register'} component={RegisterScreen} />
		</Stack.Navigator>
	);
};
