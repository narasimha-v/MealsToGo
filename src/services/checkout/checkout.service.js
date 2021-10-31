import createStripe from 'stripe-client';
import { host } from '../../utils/env';

const stripe = createStripe(
	'pk_test_51HEHnOHubXALqKTkx0pPhcrad8nEsiGD8FAyR5OkHXYu8GXxlm8A7VeO5erIqxGAdVQYTmNsDRldZ6i90ZhrWvfM00oGOwpyRr'
);

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const payRequest = async (token, name, amount) => {
	return fetch(`${host}/pay`, {
		method: 'POST',
		body: JSON.stringify({ token, name, amount })
	}).then((res) => {
		if (res.status > 200) {
			return Promise.reject('Payment not processed!');
		}
		return res.json();
	});
};
