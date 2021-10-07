import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import { SafeArea } from '../../components/utils';
import { RestaurantsNavigator } from './restaurants.navigator';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
	Restaurants: 'md-restaurant',
	Map: 'md-map',
	Settings: 'md-settings'
};

const tabBarIcon =
	(iconName) =>
	({ size, color }) =>
		<Ionicons name={iconName} size={size} color={color} />;

const screenOptions = ({ route }) => {
	const iconName = TAB_ICON[route.name];
	return {
		tabBarIcon: tabBarIcon(iconName),
		tabBarActiveTintColor: 'tomato',
		headerShown: false
	};
};

const Settings = () => (
	<SafeArea>
		<Text>Settings</Text>
	</SafeArea>
);

const Map = () => (
	<SafeArea>
		<Text>Map</Text>
	</SafeArea>
);

export const AppNavigator = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator screenOptions={screenOptions}>
				<Tab.Screen name={'Restaurants'} component={RestaurantsNavigator} />
				<Tab.Screen name={'Map'} component={Map} />
				<Tab.Screen name={'Settings'} component={Settings} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};
