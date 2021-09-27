import { mocks } from './';
import camelize from 'camelize';

export const restaurantsRequest = (location = '51.219448,4.402464') => {
	return new Promise((resolve, reject) => {
		const mock = mocks[location];
		if (!mock) {
			reject('Not found.');
		}
		resolve(mock);
	});
};

export const transformRestaurants = ({ results = [] }) => {
	const mappedRes = results.map((restaurant) => ({
		...restaurant,
		isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
		isClosedTemporarily: restaurant.buisness_status === 'CLOSED_TEMPORARILY'
	}));
	return camelize(mappedRes);
};

restaurantsRequest()
	.then(transformRestaurants)
	.then(console.log)
	.catch(console.error);
