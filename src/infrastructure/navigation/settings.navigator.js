import {
	CardStyleInterpolators,
	createStackNavigator
} from '@react-navigation/stack';
import React from 'react';
import {
	FavouritesSscreen,
	SettingsScreen
} from '../../features/settings/screens';

const SettingsStack = createStackNavigator();

export const SettingssNavigator = () => {
	return (
		<SettingsStack.Navigator
			headerMode={'float'}
			screenOptions={{
				cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
			}}>
			<SettingsStack.Screen name={'Settings'} component={SettingsScreen} />
			<SettingsStack.Screen name={'Favourites'} component={FavouritesSscreen} />
		</SettingsStack.Navigator>
	);
};
