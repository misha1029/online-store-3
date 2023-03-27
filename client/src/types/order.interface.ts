import { ICartItem } from './cart.interface'
import { IUser } from './user.interface'

enum EnumOderStatus {
	PENDING = 'PENDING',
	PAYED = 'PAYED',
	SHIPPED = 'SHIPPED',
	DELIVERED = 'DELIVERED'
}

export interface IOrder {
	id: number
	createdAt: string
	items: ICartItem[]
	status: EnumOderStatus
	user: IUser
}
