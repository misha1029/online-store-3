import { FC } from 'react'

import Catalog from '@/ui/catalog/Catalog'
import Meta from '@/ui/meta/Meta'

import { TypePaginationProducts, TypeProducts } from '@/types/product.interface'

const Home: FC<TypePaginationProducts> = ({ products, length }) => {
	return (
		<Meta title='Home'>
			<div>
				<Catalog products={products} />
			</div>
		</Meta>
	)
}

export default Home
