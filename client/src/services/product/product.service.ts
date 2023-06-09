import { IProduct, TypePaginationProducts } from '@/types/product.interface'

import instance, { axiosClassic } from '@/api/api.interceptor'

import { PRODUCTS, TypeDataFilters, TypeProductData } from './product.types'

export const ProductService = {
	async getAll(queryData?: TypeDataFilters) {
		const { data } = await axiosClassic<TypePaginationProducts>({
			url: PRODUCTS,
			method: 'GET',
			params: queryData || {}
		})

		return data
	},

	async getSimilar(id: string | number) {
		return axiosClassic<IProduct[]>({
			url: `${PRODUCTS}/similar/${id}`,
			method: 'GET'
		})
	},

	async getBySlug(slug: string) {
		return axiosClassic<IProduct>({
			url: `${PRODUCTS}/bu-slug/${slug}`,
			method: 'GET'
		})
	},

	async getByCategory(categorySlug: string) {
		return axiosClassic<IProduct[]>({
			url: `${PRODUCTS}/by-category/${categorySlug}`,
			method: 'GET'
		})
	},

	async getById(id: string | number) {
		return instance<IProduct>({
			url: `${PRODUCTS}/${id}`,
			method: 'GET'
		})
	},

	async create() {
		return instance<IProduct>({
			url: PRODUCTS,
			method: 'POST'
		})
	},

	async update(id: string | number, data: TypeProductData) {
		return instance<IProduct>({
			url: `${PRODUCTS}/${id}`,
			method: 'PUT',
			data
		})
	},

	async delete(id: string | number) {
		return instance<IProduct>({
			url: `${PRODUCTS}/${id}`,
			method: 'DELETE'
		})
	}
}
