import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Spacer } from '../../../components/spacer';
import { Text } from '../../../components/typography';
import { SafeArea } from '../../../components/utils';
import { FavouritesContext } from '../../../services/favourites';
import {
	RestaurantInfoCard,
	RestaurantList
} from '../../restaurants/Components';

const NoFavouritesContainer = styled(SafeArea)`
	justify-content: center;
	align-items: center;
`;

export const FavouritesSscreen = ({ navigation }) => {
	const { favourites } = useContext(FavouritesContext);

	if (favourites.length) {
		return (
			<SafeArea>
				<RestaurantList
					data={favourites}
					renderItem={({ item }) => (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate('RestaurantDetail', { restaurant: item })
							}>
							<Spacer position={'bottom'} size={'large'}>
								<RestaurantInfoCard restaurant={item} />
							</Spacer>
						</TouchableOpacity>
					)}
					keyExtractor={(item) => item.name}
				/>
			</SafeArea>
		);
	} else {
		return (
			<NoFavouritesContainer>
				<Text>No restaurants favourited yet.</Text>
			</NoFavouritesContainer>
		);
	}
};
