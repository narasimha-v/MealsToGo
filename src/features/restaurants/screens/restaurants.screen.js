/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { FlatList, SafeAreaView, StatusBar, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { Spacer } from '../../../components/spacer';
import { RestaurantInfoCard } from '../Components';

const SafeArea = styled(SafeAreaView)`
	flex: 1;
	margin-top: ${StatusBar.currentHeight ?? 0}px;
`;

const SearchContainer = styled(View)`
	padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => {
	return (
		<SafeArea>
			<SearchContainer>
				<Searchbar />
			</SearchContainer>
			<FlatList
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
				contentContainerStyle={{ padding: 16 }}
			/>
		</SafeArea>
	);
};
