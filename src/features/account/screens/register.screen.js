import React, { useContext, useState } from 'react';
import { ActivityIndicator, Colors } from 'react-native-paper';
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

export const RegisterScreen = ({ navigation }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [repeatedPassword, setRepeatedPassword] = useState('');
	const { onRegister, error, isLoading } = useContext(AuthenticationContext);

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
				<Spacer size={'large'} />
				<AuthInput
					label={'Re-enter Password'}
					value={repeatedPassword}
					textContentType={'password'}
					autoCapitalize={'none'}
					secureTextEntry
					onChangeText={(e) => setRepeatedPassword(e)}
				/>
				{error && (
					<ErrorContainer>
						<Spacer size={'large'} />
						<Text variant={'error'}>{error}</Text>
					</ErrorContainer>
				)}
				<Spacer size={'large'} />
				{!isLoading ? (
					<AuthButton
						icon={'email'}
						mode={'contained'}
						onPress={() => {
							onRegister(email, password, repeatedPassword);
						}}>
						Register
					</AuthButton>
				) : (
					<ActivityIndicator animating color={Colors.blue300} />
				)}
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
