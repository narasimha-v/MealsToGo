import React from 'react';
import { Spacer } from '../../../components/spacer';
import {
	AccountBackground,
	AccountContainer,
	AccountCover,
	AuthButton
} from '../components';

export const AccountScreen = ({ navigation }) => (
	<AccountBackground>
		<AccountCover />
		<AccountContainer>
			<AuthButton
				icon={'lock-open-outline'}
				mode={'contained'}
				onPress={() => {
					navigation.navigate('Login');
				}}>
				Login
			</AuthButton>
			<Spacer size={'large'} />
			<AuthButton
				icon={'email'}
				mode={'contained'}
				onPress={() => {
					navigation.navigate('Register');
				}}>
				Register
			</AuthButton>
		</AccountContainer>
	</AccountBackground>
);
