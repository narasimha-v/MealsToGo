import React, { useContext, useState, useEffect } from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { LocationContext } from '../../../services/location';

const SearchContainer = styled(View)`
	padding: ${(props) => props.theme.space[3]};
`;

export const Search = () => {
	const { keyword, search } = useContext(LocationContext);
	const [searchKeyword, setSearchKeyword] = useState(keyword);

	useEffect(() => {
		search(searchKeyword);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<SearchContainer>
			<Searchbar
				placeholder={'Search for a location'}
				value={searchKeyword}
				onSubmitEditing={() => {
					search(searchKeyword);
				}}
				onChangeText={(text) => {
					if (!text.length) {
						return;
					}
					setSearchKeyword(text);
				}}
			/>
		</SearchContainer>
	);
};
