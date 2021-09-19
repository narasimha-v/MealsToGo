import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { RestaurantInfo } from '../Components';

const SafeArea = styled(SafeAreaView)`
	flex: 1;
	margin-top: ${StatusBar.currentHeight ?? 0}px;
`;

const SearchContainer = styled(View)`
	padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled(View)`
	flex: 1;
	padding: ${(props) => props.theme.space[3]};
	background-color: ${(props) => props.theme.colors.brand.primary};
`;

export const RestaurantsScreen = () => {
	return (
		<SafeArea>
			<SearchContainer>
				<Searchbar />
			</SearchContainer>
			<RestaurantListContainer>
				<RestaurantInfo />
			</RestaurantListContainer>
		</SafeArea>
	);
};
