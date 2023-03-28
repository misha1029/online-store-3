import { cartActions } from './cart/cart.slice'
import * as userActions from './user/user.actions'

export const rootActions = {
	...cartActions,
	...userActions
}
