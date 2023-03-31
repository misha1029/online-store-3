import { FC } from 'react'

import { IProduct } from '@/types/product.interface'

import Loading from '../Loading/Loading'

import ProductItem from './product-item/ProductItem'

const Catalog: FC<{ products: IProduct[]; isLoader?: boolean }> = ({
	products,
	isLoader
}) => {
	if (isLoader) return <Loading />

	return (
		<section>
			{products.length ? (
				products.map(product => (
					<ProductItem key={product.id} product={product} />
				))
			) : (
				<div>The are no products</div>
			)}
		</section>
	)
}

export default Catalog
