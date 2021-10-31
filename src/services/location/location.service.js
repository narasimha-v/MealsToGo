import camelize from 'camelize';
import { host } from '../../utils/env';
import { locations } from './location.mock';

export const locationRequest = (searchTerm) => {
	return fetch(`${host}/geocode?city=${searchTerm}`).then((res) => res.json());
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
