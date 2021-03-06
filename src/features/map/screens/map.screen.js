import React, { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import styled from 'styled-components/native';
import { LocationContext } from '../../../services/location';
import { RestaurantsContext } from '../../../services/restaurants';
import { Search, MapCallout } from '../components';

const Map = styled(MapView)`
	height: 100%;
	width: 100%;
`;

export const MapScreen = ({ navigation }) => {
	const { location } = useContext(LocationContext);
	const { restaurants = [] } = useContext(RestaurantsContext);
	const [latDelta, setLatDelta] = useState(0);

	useEffect(() => {
		if (!location) {
			return;
		}
		const northeastLat = location.viewport.northeast.lat;
		const southwestLat = location.viewport.southwest.lat;
		setLatDelta(northeastLat - southwestLat);
	}, [location]);

	if (!location) {
		return <Map />;
	}

	const { lat, lng } = location;

	return (
		<>
			<Search />
			<Map
				region={{
					latitude: lat,
					longitude: lng,
					latitudeDelta: latDelta,
					longitudeDelta: 0.02
				}}>
				{restaurants.map((restaurant) => {
					return (
						<MapView.Marker
							key={restaurant.name}
							title={restaurant.name}
							coordinate={{
								latitude: restaurant.geometry.location.lat,
								longitude: restaurant.geometry.location.lng
							}}>
							<MapView.Callout
								onPress={() =>
									navigation.navigate('RestaurantDetail', { restaurant })
								}>
								<View>
									<MapCallout restaurant={restaurant} />
								</View>
							</MapView.Callout>
						</MapView.Marker>
					);
				})}
			</Map>
		</>
	);
};
