/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import styled from 'styled-components/native';
import open from '../../../../assets/open';
import star from '../../../../assets/star';
import { Spacer } from '../../../components/spacer';

const RestaurantCard = styled(Card)`
	background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
	padding: ${(props) => props.theme.space[3]};
	background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Section = styled(View)`
	flex-direction: row;
	align-items: center;
`;

const SectionEnd = styled(View)`
	flex: 1;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
`;

const Rating = styled(View)`
	flex-direction: row;
	padding-top: ${(props) => props.theme.space[2]};
	padding-bottom: ${(props) => props.theme.space[2]};
`;

const Info = styled(View)`
	padding: ${(props) => props.theme.space[3]};
`;

const Title = styled(Text)`
	font-size: ${(props) => props.theme.fontSizes.body};
	font-family: ${(props) => props.theme.fonts.heading};
	color: ${(props) => props.theme.colors.ui.primary};
`;

const Address = styled(Text)`
	font-size: ${(props) => props.theme.fontSizes.caption};
	font-family: ${(props) => props.theme.fonts.body};
	color: ${(props) => props.theme.colors.ui.primary};
`;

export const RestaurantInfo = ({ restaurant = {} }) => {
	const {
		name = 'Rosetta',
		icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
		photos = [
			'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg'
		],
		address = '100 St, Middle of nowhere',
		isOpenNow = true,
		rating = 5,
		isClosedTemporarily = true
	} = restaurant;

	const ratingArray = Array.from(new Array(Math.floor(rating)));

	return (
		<RestaurantCard elevation={5}>
			<RestaurantCardCover key={name} source={{ uri: photos[0] }} />
			<Info>
				<Title>{name}</Title>
				<Section>
					<Rating>
						{ratingArray.map((_, i) => (
							<SvgXml key={i} xml={star} width={20} height={20} />
						))}
					</Rating>
					<SectionEnd>
						{isClosedTemporarily && (
							<Text variant={'label'} style={{ color: 'red' }}>
								CLOSED TEMPORARILY
							</Text>
						)}
						<Spacer position={'left'} size={'large'}>
							{isOpenNow && <SvgXml xml={open} width={20} height={20} />}
						</Spacer>
						<Spacer position={'left'} size={'large'}>
							<Image style={{ width: 16, height: 16 }} source={{ uri: icon }} />
						</Spacer>
					</SectionEnd>
				</Section>
				<Address>{address}</Address>
			</Info>
		</RestaurantCard>
	);
};
