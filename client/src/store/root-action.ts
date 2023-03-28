import { cartActions } from './cart/cart.slice'
import { userActions } from './user/user.slise'

export const rootActions = {
	...cartActions,
	...userActions
}
