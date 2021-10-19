import React, { useContext, useState } from 'react';
import { Spacer } from '../../../components/spacer';
import { Text } from '../../../components/typography';
import { AuthenticationContext } from '../../../services/authentication';
import {
	AccountBackground,
	AccountContainer,
	AccountCover,
	AuthButton,
	AuthInput,
	ErrorContainer,
	Title
} from '../components';

export const LoginScreen = ({ navigation }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { onLogin, error } = useContext(AuthenticationContext);

	return (
		<AccountBackground>
			<AccountCover />
			<Title>Meals To Go</Title>
			<AccountContainer>
				<AuthInput
					label={'E-mail'}
					value={email}
					textContentType={'emailAddress'}
					keyboardType={'email-address'}
					autoCapitalize={'none'}
					onChangeText={(e) => setEmail(e)}
				/>
				<Spacer size={'large'} />
				<AuthInput
					label={'Password'}
					value={password}
					textContentType={'password'}
					autoCapitalize={'none'}
					secureTextEntry
					onChangeText={(e) => setPassword(e)}
				/>
				{error && (
					<ErrorContainer>
						<Spacer size={'large'} />
						<Text variant={'error'}>{error}</Text>
					</ErrorContainer>
				)}
				<Spacer size={'large'} />
				<AuthButton
					icon={'lock-open-outline'}
					mode={'contained'}
					onPress={() => {
						onLogin(email, password);
					}}>
					Login
				</AuthButton>
			</AccountContainer>
			<Spacer size={'large'}>
				<AuthButton
					mode={'contained'}
					onPress={() => {
						navigation.goBack();
					}}>
					Back
				</AuthButton>
			</Spacer>
		</AccountBackground>
	);
};
