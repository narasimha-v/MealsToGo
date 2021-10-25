import camelize from 'camelize';
import { mocks } from './mock';

export const restaurantRequest = (location) => {
	return fetch(
		`http://localhost:5001/mealstogo-ef5e0/us-central1/placesNearby?location=${location}`
	).then((res) => res.json());
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
