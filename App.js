import { Lato_400Regular, useFonts as useLato } from '@expo-google-fonts/lato';
import {
	Oswald_400Regular,
	useFonts as useOswald
} from '@expo-google-fonts/oswald';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { SafeArea } from './src/components/utils';
import { RestaurantsScreen } from './src/features/restaurants/screens';
import { theme } from './src/infrastructure/theme';

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

export default function App() {
	const [oswaldLoaded] = useOswald({
		Oswald_400Regular
	});

	const [latoLoaded] = useLato({
		Lato_400Regular
	});

	if (!oswaldLoaded || !latoLoaded) {
		return null;
	}

	return (
		<ThemeProvider theme={theme}>
			<NavigationContainer>
				<Tab.Navigator screenOptions={screenOptions}>
					<Tab.Screen name={'Restaurants'} component={RestaurantsScreen} />
					<Tab.Screen name={'Map'} component={Map} />
					<Tab.Screen name={'Settings'} component={Settings} />
				</Tab.Navigator>
			</NavigationContainer>
		</ThemeProvider>
	);
}
