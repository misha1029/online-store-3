import { IsEnum, IsOptional, IsString } from 'class-validator'
import { PaginationDto } from 'src/pagination/dro/pagination-dto'

export enum EnumProductSort {
	HICH_PRICE = 'high-price',
	LOW_PRICE = 'low-price',
	NEWEST = 'newest',
	OLDEST = 'oldest'
}

export class GetAllProductDto extends PaginationDto {
	@IsOptional()
	@IsEnum(EnumProductSort)
	sort?: EnumProductSort

	@IsOptional()
	@IsString()
	searchTerm?: string
}
