import { Prisma } from '@prisma/client'
import { returnCategoryObject } from 'src/category/return-category.object'
import { returnReviewObject } from 'src/review/return-review.object'

export const productrReturnObject: Prisma.ProductSelect = {
	images: true,
	description: true,
	id: true,
	name: true,
	price: true,
	createdAt: true,
	slug: true
}

export const productReturnObjectFullest: Prisma.ProductSelect = {
	...productrReturnObject,
	reviews: {
		select: returnReviewObject
	},
	category: { select: returnCategoryObject }
}
