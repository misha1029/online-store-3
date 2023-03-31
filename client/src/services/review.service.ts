import { IReview } from '@/types/review.interface'

import instance, { axiosClassic } from '@/api/api.interceptor'

const REVIEWS = 'reviews'

type TypeData = {
	rating: number
	text: string
}

export const ReviewService = {
	async getAll() {
		return axiosClassic<IReview[]>({
			url: REVIEWS,
			method: 'GET'
		})
	},
	async leave(productId: string | number, data: TypeData) {
		return instance<IReview>({
			url: `${REVIEWS}/leave/${productId}`,
			method: 'POST',
			data
		})
	},
	async getAverageByProduct(productId: string | number) {
		return axiosClassic<number>({
			url: `${REVIEWS}/average-by-product/${productId}`,
			method: 'GET'
		})
	}
}
