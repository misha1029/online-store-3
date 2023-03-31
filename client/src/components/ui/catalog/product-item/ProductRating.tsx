import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import { Rating } from 'react-simple-star-rating'

import { IProduct } from '@/types/product.interface'

import { ReviewService } from '@/services/review.service'

export const ProductRating: FC<{ product: IProduct }> = ({ product }) => {
	const { data: rating } = useQuery(
		['get product rating', product.id],
		() => ReviewService.getAverageByProduct(product.id),
		{
			select: ({ data }) => data
		}
	)

	return (
		<div>
			<Rating
				readonly
				initialValue={rating}
				SVGstyle={{
					display: 'inline-block'
				}}
				size={32}
				allowFraction
				transition
			/>
			<span>({product.reviews.length} reviews)</span>
		</div>
	)
}