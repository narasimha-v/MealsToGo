import {
	CardStyleInterpolators,
	createStackNavigator
} from '@react-navigation/stack';
import React from 'react';
import { SettingsScreen } from '../../features/settings/screens';

const SettingsStack = createStackNavigator();

export const SettingssNavigator = () => {
	return (
		<SettingsStack.Navigator
			headerMode={'none'}
			screenOptions={{
				cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
			}}>
			<SettingsStack.Screen name={'Settings'} component={SettingsScreen} />
			<SettingsStack.Screen name={'Favourites'} component={SettingsScreen} />
		</SettingsStack.Navigator>
	);
};
