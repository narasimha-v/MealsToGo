import React from 'react';
import { FlatList, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { Spacer } from '../../../components/spacer';
import { SafeArea } from '../../../components/utils';
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
	return (
		<SafeArea>
			<SearchContainer>
				<Searchbar />
			</SearchContainer>
			<RestaurantList
				data={[
					{ name: 'restaurant_1' },
					{ name: 'restaurant_2' },
					{ name: 'restaurant_3' }
				]}
				renderItem={() => (
					<Spacer position={'bottom'} size={'large'}>
						<RestaurantInfoCard />
					</Spacer>
				)}
				keyExtractor={(item) => item.name}
			/>
		</SafeArea>
	);
};
