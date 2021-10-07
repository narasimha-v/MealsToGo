import {
	createStackNavigator,
	TransitionPresets
} from '@react-navigation/stack';
import React from 'react';
import {
	RestaurantsScreen,
	RestaurantDetailScreen
} from '../../features/restaurants/screens';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
	return (
		<RestaurantStack.Navigator
			headerMode={'none'}
			screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}>
			<RestaurantStack.Screen
				name={'Restaurants'}
				component={RestaurantsScreen}
			/>
			<RestaurantStack.Screen
				name={'RestaurantDetail'}
				component={RestaurantDetailScreen}
			/>
		</RestaurantStack.Navigator>
	);
};
