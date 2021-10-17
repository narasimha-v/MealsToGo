import React, { useContext } from 'react';
import { AuthenticationContext } from '../../services/authentication';
import { AccountNavigator } from './account.navigator';
import { AppNavigator } from './app.navigator';
import { NavigationContainer } from '@react-navigation/native';

export const Navigation = () => {
	const { isAuthenticated } = useContext(AuthenticationContext);

	return (
		<NavigationContainer>
			{isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
		</NavigationContainer>
	);
};
