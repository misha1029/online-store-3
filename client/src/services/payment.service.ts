import { IPaymentResponse } from '@/types/payment.interface'

import instance from '@/api/api.interceptor'

const PAYMENT = 'payment'

export const PaymentService = {
	async createpayment(amount: number) {
		const { data } = await instance.post<IPaymentResponse>(PAYMENT, { amount })
		return data
	}
}
