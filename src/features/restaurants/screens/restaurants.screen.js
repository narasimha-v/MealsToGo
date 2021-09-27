import React, { useContext } from 'react';
import { FlatList, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { Spacer } from '../../../components/spacer';
import { SafeArea } from '../../../components/utils';
import { RestaurantsContext } from '../../../services/restaurants';
import { RestaurantInfoCard } from '../Components';

const SearchContainer = styled(View)`
	padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
	contentContainerStyle: {
		padding: 16
	}
})``;

export const RestaurantsScreen = () => {
	const { restaurants, isLoading, error } = useContext(RestaurantsContext);
	console.log(isLoading, error);

	return (
		<SafeArea>
			<SearchContainer>
				<Searchbar />
			</SearchContainer>
			<RestaurantList
				data={restaurants}
				renderItem={({ item }) => (
					<Spacer position={'bottom'} size={'large'}>
						<RestaurantInfoCard restaurant={item} />
					</Spacer>
				)}
				keyExtractor={(item) => item.name}
			/>
		</SafeArea>
	);
};
