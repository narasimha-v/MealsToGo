import React, { useContext } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import styled from 'styled-components/native';
import { Spacer } from '../../../components/spacer';
import { SafeArea } from '../../../components/utils';
import { RestaurantsContext } from '../../../services/restaurants';
import { RestaurantInfoCard, Search } from '../Components';

const RestaurantList = styled(FlatList).attrs({
	contentContainerStyle: {
		padding: 16
	}
})``;

const Loader = styled(SafeArea)`
	justify-content: center;
	align-items: center;
`;

export const RestaurantsScreen = ({ navigation }) => {
	const { restaurants, isLoading } = useContext(RestaurantsContext);

	return (
		<SafeArea>
			<Search />
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
