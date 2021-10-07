import React from 'react';
import { SafeArea } from '../../../components/utils';
import { RestaurantInfoCard } from '../Components';

export const RestaurantDetailScreen = ({ route }) => {
	const { restaurant } = route.params;
	return (
		<SafeArea>
			<RestaurantInfoCard restaurant={restaurant} />
		</SafeArea>
	);
};
