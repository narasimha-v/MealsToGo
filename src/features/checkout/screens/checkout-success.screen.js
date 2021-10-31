import React from 'react';
import { Spacer } from '../../../components/spacer';
import { Text } from '../../../components/typography';
import { SafeArea } from '../../../components/utils';
import { CartIcon, CartIconContainer } from '../components';

export const CheckoutSuccessScreen = () => {
	return (
		<SafeArea>
			<CartIconContainer>
				<CartIcon icon={'check-bold'} />
				<Spacer>
					<Text variant={'label'}>Success!</Text>
				</Spacer>
			</CartIconContainer>
		</SafeArea>
	);
};
