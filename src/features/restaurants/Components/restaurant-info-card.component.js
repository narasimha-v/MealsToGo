import React from 'react';
import { SvgXml } from 'react-native-svg';
import open from '../../../../assets/open';
import star from '../../../../assets/star';
import { Spacer } from '../../../components/spacer';
import { Text } from '../../../components/typography';
import {
	Icon,
	Info,
	Rating,
	RestaurantCard,
	RestaurantCardCover,
	Section,
	SectionEnd
} from './restaurant-info-card.style';

export const RestaurantInfoCard = ({ restaurant = {} }) => {
	const {
		name,
		icon,
		photos,
		address,
		isOpenNow,
		rating,
		isClosedTemporarily,
		placeId
	} = restaurant;

	let ratingArray = Array.from(new Array(Math.floor(rating > 0 ? rating : 0)));

	return (
		<RestaurantCard elevation={5}>
			<RestaurantCardCover key={name} source={{ uri: photos[0] }} />
			<Info>
				<Text variant={'label'}>{name}</Text>
				<Section>
					<Rating>
						{ratingArray.map((_, i) => (
							<SvgXml
								key={`star-${placeId}-${i}`}
								xml={star}
								width={20}
								height={20}
							/>
						))}
					</Rating>
					<SectionEnd>
						{isClosedTemporarily && (
							<Text variant={'error'}>CLOSED TEMPORARILY</Text>
						)}
						<Spacer position={'left'} size={'large'}>
							{isOpenNow && <SvgXml xml={open} width={20} height={20} />}
						</Spacer>
						<Spacer position={'left'} size={'large'}>
							<Icon source={{ uri: icon }} />
						</Spacer>
					</SectionEnd>
				</Section>
				<Text>{address}</Text>
			</Info>
		</RestaurantCard>
	);
};
