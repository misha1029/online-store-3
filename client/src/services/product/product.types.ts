export const PRODUCTS = 'products'

export enum EnumProductSort {
	HICH_PRICE = 'high-price',
	LOW_PRICE = 'low-price',
	NEWEST = 'newest',
	OLDEST = 'oldest'
}

export type TypeProductData = {
	name: string
	price: number
	description?: string
	images: string[]
	categoryId: number
}

export type TypeDataFilters = {
	sort?: EnumProductSort
	searchTerm?: string
	page?: string | number
	perPage?: string | number
}
