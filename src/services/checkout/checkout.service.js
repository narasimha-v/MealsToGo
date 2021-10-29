import createStripe from 'stripe-client';

const stripe = createStripe(
	'pk_test_51HEHnOHubXALqKTkx0pPhcrad8nEsiGD8FAyR5OkHXYu8GXxlm8A7VeO5erIqxGAdVQYTmNsDRldZ6i90ZhrWvfM00oGOwpyRr'
);

export const cardTokenRequest = async (card) => {
	await stripe.createToken({ card });
};
