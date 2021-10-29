/* eslint-disable no-unused-vars */
import React from 'react';
import { LiteCreditCardInput } from 'react-native-credit-card-input';
import { SafeArea } from '../../../components/utils';
import { cardTokenRequest } from '../../../services/checkout';

export const CreditCardInput = ({ name = 'Ted' }) => {
	const onChange = async (formData) => {
		const { values, status } = formData;
		const isIncomplete = Object.values(status).includes('incomplete');
		const expiry = values.expiry.split('/');
		const card = {
			number: values.number,
			exp_month: expiry[0],
			exp_year: expiry[1],
			cvc: values.cvc,
			name: name
		};

		const info = await cardTokenRequest(card);
		console.log(info);
	};

	return (
		<SafeArea>
			<LiteCreditCardInput onChange={onChange} />
		</SafeArea>
	);
};
