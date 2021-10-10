import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { FavouritesContext } from '../../services/favourites';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

const FavouriteButton = styled(TouchableOpacity)`
	position: absolute;
	top: 10px;
	right: 10px;
	z-index: 10;
`;

export const Favourite = ({ restaurant }) => {
	const { favourites, addToFavourites, removeFromFavourites } =
		useContext(FavouritesContext);

	const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId);

	return (
		<FavouriteButton
			onPress={() => {
				if (isFavourite) {
					removeFromFavourites(restaurant);
				} else {
					addToFavourites(restaurant);
				}
			}}>
			<AntDesign
				name={isFavourite ? 'heart' : 'hearto'}
				size={24}
				color={isFavourite ? 'red' : 'white'}
			/>
		</FavouriteButton>
	);
};
