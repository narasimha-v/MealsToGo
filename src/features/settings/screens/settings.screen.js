import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { Avatar, List } from 'react-native-paper';
import styled from 'styled-components/native';
import { Spacer } from '../../../components/spacer';
import { Text } from '../../../components/typography';
import { SafeArea } from '../../../components/utils';
import { AuthenticationContext } from '../../../services/authentication';

const SettingsItem = styled(List.Item)`
	padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled(TouchableOpacity)`
	align-items: center;
	padding-top: ${(props) => props.theme.space[4]};
`;

export const SettingsScreen = ({ navigation }) => {
	const { onLogout, user } = useContext(AuthenticationContext);
	return (
		<SafeArea>
			<AvatarContainer onPress={() => navigation.navigate('Camera')}>
				<Avatar.Icon icon={'human'} size={100} backgroundColor={'#2182BD'} />
				<Spacer position={'top'} size={'large'}>
					<Text variant={'label'}>{user.email}</Text>
				</Spacer>
			</AvatarContainer>

			<List.Section>
				<List.Section>
					<SettingsItem
						title={'Favourites'}
						description={'View your favourites'}
						left={(props) => <List.Icon {...props} icon={'heart'} />}
						onPress={() => navigation.navigate('Favourites')}
					/>
					<SettingsItem
						title={'Logout'}
						left={(props) => <List.Icon {...props} icon={'door'} />}
						onPress={onLogout}
					/>
				</List.Section>
			</List.Section>
		</SafeArea>
	);
};
