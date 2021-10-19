import React from 'react';
import { Spacer } from '../../../components/spacer';
import {
	AccountBackground,
	AccountContainer,
	AccountCover,
	AuthButton,
	Title
} from '../components';

export const AccountScreen = ({ navigation }) => (
	<AccountBackground>
		<AccountCover />
		<Title>Meals To Go</Title>
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
