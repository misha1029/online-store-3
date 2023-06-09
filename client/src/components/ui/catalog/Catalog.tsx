import { FC } from 'react'

import { IProduct } from '@/types/product.interface'

import { Heading } from '../Heading/Heading'
import Loading from '../Loading/Loading'

import ProductItem from './product-item/ProductItem'

interface ICatalog {
	products: IProduct[]
	isLoader?: boolean
	title?: string
}

const Catalog: FC<ICatalog> = ({ products, isLoader, title }) => {
	if (isLoader) return <Loading />

	return (
		<section>
			{title && <Heading className='mb-5'>{title}</Heading>}
			{products.length ? (
				<>
					<div className='grid grid-cols-4 gap-10'>
						{products.map(product => (
							<ProductItem key={product.id} product={product} />
						))}
					</div>
				</>
			) : (
				<div>The are no products</div>
			)}
		</section>
	)
}

export default Catalog
