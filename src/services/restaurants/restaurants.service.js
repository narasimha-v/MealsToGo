import camelize from 'camelize';
import { host } from '../../utils/env';
import { mocks } from './mock';

export const restaurantRequest = (location) => {
	return fetch(`${host}/placesNearby?location=${location}`).then((res) =>
		res.json()
	);
};

export const restaurantRequest_mock = (location) => {
	return new Promise((resolve, reject) => {
		const mock = mocks[location];
		if (!mock) {
			reject('Not found.');
		}
		resolve(mock);
	});
};

export const restaurantTransform = ({ results = [] }) => {
	const mappedResults = results.map((restaurant) => {
		return {
			...restaurant,
			isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
			isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
			address: restaurant.vicinity
		};
	});

	return camelize(mappedResults);
};
