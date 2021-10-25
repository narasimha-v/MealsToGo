import camelize from 'camelize';
import { locations } from './location.mock';

export const locationRequest = (searchTerm) => {
	return fetch(
		`http://localhost:5001/mealstogo-ef5e0/us-central1/geocode?city=${searchTerm}`
	).then((res) => res.json());
};

export const locationRequest_mock = (searchTerm) => {
	return new Promise((resolve, reject) => {
		const locationMock = locations[searchTerm];
		if (!locationMock) {
			reject('Not Found.');
		}
		resolve(locationMock);
	});
};

export const locationTransform = (result) => {
	const { geometry = {} } = camelize(result.results)[0];
	const { lat, lng } = geometry.location;
	return { lat, lng, viewport: geometry.viewport };
};
