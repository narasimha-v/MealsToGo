import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { MapScreen } from '../../features/map/screens';
import { SettingsScreen } from '../../features/settings/screens';
import { FavouritesContextPropvider } from '../../services/favourites';
import { LocationContextProvider } from '../../services/location';
import { RestaurantsContextProvider } from '../../services/restaurants';
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
		tabBarIcon: tabBarIcon(iconName)
	};
};

export const AppNavigator = () => {
	return (
		<FavouritesContextPropvider>
			<LocationContextProvider>
				<RestaurantsContextProvider>
					<Tab.Navigator
						screenOptions={screenOptions}
						tabBarOptions={{ activeTintColor: 'tomato' }}>
						<Tab.Screen name={'Restaurants'} component={RestaurantsNavigator} />
						<Tab.Screen name={'Map'} component={MapScreen} />
						<Tab.Screen name={'Settings'} component={SettingsScreen} />
					</Tab.Navigator>
				</RestaurantsContextProvider>
			</LocationContextProvider>
		</FavouritesContextPropvider>
	);
};
