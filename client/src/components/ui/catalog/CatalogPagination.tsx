import { useQuery } from '@tanstack/react-query'
import { FC, useState } from 'react'

import { TypePaginationProducts } from '@/types/product.interface'

import { Heading } from '../Heading/Heading'
import Loading from '../Loading/Loading'
import Button from '../button/Button'

import SortDropdown from './SortDropdown/SortDropdown'
import ProductItem from './product-item/ProductItem'
import { ProductService } from '@/services/product/product.service'
import { EnumProductSort } from '@/services/product/product.types'

interface ICatalogPagination {
	data: TypePaginationProducts
	title?: string
}

const CatalogPagination: FC<ICatalogPagination> = ({ data, title }) => {
	const [page, setPage] = useState(1)
	const [sortType, setSortType] = useState<EnumProductSort>(
		EnumProductSort.NEWEST
	)

	const { data: response, isLoading } = useQuery(
		['products sort', sortType, page],
		() =>
			ProductService.getAll({
				page,
				perPage: 4,
				sort: sortType
			}),
		{
			initialData: data
		}
	)

	if (isLoading) return <Loading />

	return (
		<section>
			{title && <Heading className='mb-5'>{title}</Heading>}
			<SortDropdown sortType={sortType} setSortType={setSortType} />
			{response.products.length ? (
				<>
					<div className='grid grid-cols-4 gap-10'>
						{response.products.map(product => (
							<ProductItem key={product.id} product={product} />
						))}
					</div>
					<div className='text-center mt-16'>
						{Array.from({ length: response.length / 4 }).map((_, index) => {
							const pageNumber = index + 1
							return (
								<Button
									size='sm'
									variant={page === pageNumber ? 'orange' : 'white'}
									onClick={() => setPage(pageNumber)}
									className='mx-3'
								>
									{pageNumber}
								</Button>
							)
						})}
					</div>
				</>
			) : (
				<div>The are no products</div>
			)}
		</section>
	)
}

export default CatalogPagination
