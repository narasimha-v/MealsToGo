import React from 'react';
import { Spacer } from '../../../components/spacer';
import { Text } from '../../../components/typography';
import { SafeArea } from '../../../components/utils';
import { colors } from '../../../infrastructure/theme/colors';
import { CartIcon, CartIconContainer } from '../components';

export const CheckoutErrorScreen = ({ route }) => {
	const { error = '' } = route.params;

	return (
		<SafeArea>
			<CartIconContainer>
				<CartIcon icon={'close'} bg={colors.ui.error} />
				{error && (
					<Spacer>
						<Text variant={'label'}>{error}</Text>
					</Spacer>
				)}
			</CartIconContainer>
		</SafeArea>
	);
};
