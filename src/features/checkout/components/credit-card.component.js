/* eslint-disable no-unused-vars */
import React from 'react';
import { LiteCreditCardInput } from 'react-native-credit-card-input';
import { SafeArea } from '../../../components/utils';
import createStripe from 'stripe-client';

const stripe = createStripe(
	'pk_test_51HEHnOHubXALqKTkx0pPhcrad8nEsiGD8FAyR5OkHXYu8GXxlm8A7VeO5erIqxGAdVQYTmNsDRldZ6i90ZhrWvfM00oGOwpyRr'
);

export const CreditCardInput = () => {
	const onChange = async (formData) => {
		const { values, status } = formData;
		const isIncomplete = Object.values(status).includes('incomplete');
		const card = {
			number: '424242424242',
			exp_month: '02',
			exp_year: '24',
			cvc: '244',
			name: 'ted'
		};

		const info = await stripe.createToken({ card });
		console.log(info);
	};

	return (
		<SafeArea>
			<LiteCreditCardInput onChange={onChange} />
		</SafeArea>
	);
};
