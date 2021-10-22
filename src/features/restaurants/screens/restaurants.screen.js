import React, { useContext, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import styled from 'styled-components/native';
import { FavouritesBar } from '../../../components/favourites';
import { Spacer } from '../../../components/spacer';
import { SafeArea } from '../../../components/utils';
import { FavouritesContext } from '../../../services/favourites';
import { RestaurantsContext } from '../../../services/restaurants';
import { RestaurantInfoCard, RestaurantList, Search } from '../Components';

const Loader = styled(SafeArea)`
	justify-content: center;
	align-items: center;
`;

export const RestaurantsScreen = ({ navigation }) => {
	const { restaurants, isLoading } = useContext(RestaurantsContext);
	const { favourites } = useContext(FavouritesContext);
	const [isToggled, setIsToggled] = useState(false);

	return (
		<SafeArea>
			<Search
				isFavouritesToggled={isToggled}
				onFavouritesToggle={() => setIsToggled(!isToggled)}
			/>
			{isToggled && (
				<FavouritesBar
					favourites={favourites}
					onNavigate={navigation.navigate}
				/>
			)}
			{isLoading ? (
				<Loader>
					<ActivityIndicator
						size={50}
						animating={true}
						color={Colors.blue300}
					/>
				</Loader>
			) : (
				<RestaurantList
					data={restaurants}
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
			)}
		</SafeArea>
	);
};
