import { ICategory } from '@/types/category.interface'

import instance, { axiosClassic } from '@/api/api.interceptor'

const CATEGORIES = 'categories'

export const CategoryService = {
	async getAll() {
		return axiosClassic<ICategory[]>({
			url: CATEGORIES,
			method: 'GET'
		})
	},

	async getbyId(id: string | number) {
		return instance<ICategory>({
			url: `${CATEGORIES}/${id}`,
			method: 'GET'
		})
	},

	async getbySlug(slug: string) {
		return axiosClassic<ICategory>({
			url: `${CATEGORIES}/${slug}`,
			method: 'GET'
		})
	},

	async create() {
		return instance<ICategory>({
			url: CATEGORIES,
			method: 'POST'
		})
	},

	async update(id: string | number, name: string) {
		return instance<ICategory>({
			url: `${CATEGORIES}/${id}`,
			method: 'PUT',
			data: { name }
		})
	},

	async delete(id: string | number) {
		return instance<ICategory>({
			url: `${CATEGORIES}/${id}`,
			method: 'DELETE'
		})
	}
}
