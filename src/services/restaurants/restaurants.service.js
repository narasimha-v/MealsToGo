import { mocks, mockImages } from './mock';
import camelize from 'camelize';

export const restaurantRequest = (location = '51.219448,4.402464') => {
	return new Promise((resolve, reject) => {
		const mock = mocks[location];
		if (!mock) {
			reject('Not found.');
		}
		resolve(mock);
	});
};

export const restaurantTransform = ({ results = [] }) => {
	const mappedRes = results.map((restaurant) => ({
		...restaurant,
		isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
		isClosedTemporarily: restaurant.buisness_status === 'CLOSED_TEMPORARILY',
		photos: restaurant.photos.map(
			() => mockImages[Math.ceil(Math.random() * (mockImages.length - 1))]
		)
	}));
	return camelize(mappedRes);
};
