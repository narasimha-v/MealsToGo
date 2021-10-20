import React, { useContext } from 'react';
import { Button } from 'react-native';
import { SafeArea } from '../../../components/utils';
import { AuthenticationContext } from '../../../services/authentication';

export const SettingsScreen = () => {
	const { onLogout } = useContext(AuthenticationContext);
	return (
		<SafeArea>
			<Button
				title={'Logout'}
				onPress={() => {
					onLogout();
				}}
			/>
		</SafeArea>
	);
};
