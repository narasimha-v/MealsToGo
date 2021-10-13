import React, { useContext } from 'react';
import { AuthenticationContext } from '../../services/authentication';
import { AccountNavigator } from './account.navigator';
import { AppNavigator } from './app.navigator';
import { NavigationContainer } from '@react-navigation/native';

export const Navigation = () => {
	const { user } = useContext(AuthenticationContext);

	return (
		<NavigationContainer>
			{user ? <AppNavigator /> : <AccountNavigator />}
		</NavigationContainer>
	);
};
