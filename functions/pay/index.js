module.exports.payRequest = (request, response, stripleClient) => {
	const { token, amount } = JSON.parse(request.body);
	stripleClient.paymentIntents
		.create({
			amount: amount * 74,
			currency: 'INR',
			payment_method_types: ['card'],
			payment_method_data: {
				type: 'card',
				card: {
					token
				}
			},
			confirm: true
		})
		.then((paymentIntent) => {
			response.json(paymentIntent);
		})
		.catch((e) => {
			console.log(e);
			response.status(400);
			response.send(e);
		});
};
