import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';

const Stack = createStackNavigator();

const AccountScreen = () => (
	<View>
		<Text>Account Screen</Text>
	</View>
);

const LoginScreen = () => (
	<View>
		<Text>Login Screen</Text>
	</View>
);

export const AccountNavigator = () => {
	return (
		<Stack.Navigator headerMode={'none'}>
			<Stack.Screen name={'Main'} component={AccountScreen} />
			<Stack.Screen name={'Login'} component={LoginScreen} />
		</Stack.Navigator>
	);
};
