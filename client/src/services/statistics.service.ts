import { IReview } from '@/types/review.interface'
import { StatisticsResponse } from '@/types/stasistic.interface'

import instance from '@/api/api.interceptor'

const STATISTICS = 'categories'

type TypeData = {
	rating: number
	text: string
}

export const StatisticsService = {
	async getMain() {
		return instance<StatisticsResponse[]>({
			url: `${STATISTICS}/main`,
			method: 'GET'
		})
	}
}
