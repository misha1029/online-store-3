import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { AuthModule } from './auth/auth.module'
import { CategoryModule } from './category/category.module'
import { OrderModule } from './order/order.module'
import { PaginationModule } from './pagination/pagination.module'
import { ReviewModule } from './review/review.module'
import { StatisticModule } from './statistic/statistic.module'
import { UserModule } from './user/user.module'
import { ProductModule } from './product/product.module';

@Module({
	imports: [
		ConfigModule.forRoot(),
		AuthModule,
		UserModule,
		ReviewModule,
		CategoryModule,
		OrderModule,
		StatisticModule,
		PaginationModule,
		ProductModule
	]
})
export class AppModule {}
