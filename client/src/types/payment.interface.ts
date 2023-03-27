export interface Amount {
	value: string
	currency: string
}

export interface Recipient {
	account_id: string
	gateway_id: string
}

export interface PaymenMethod {
	id: string
	type: string
	saved: boolean
}

export interface Confirmation {
	type: string
	return_url: string
	confirmation_url: string
}

export interface IPaymentResponse {
	id: string
	status: string
	amount: Amount
	recipient: Recipient
	payment_method: PaymenMethod
	created_at: Date
	confirmation: Confirmation
}
