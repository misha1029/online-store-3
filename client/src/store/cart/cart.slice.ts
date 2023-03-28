import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import {
	IAddToCartPayload,
	ICartInitialState,
	IChangeQuantityPayload
} from './cart.types'

const initialState: ICartInitialState = {
	items: []
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addFromCart: (state, action: PayloadAction<IAddToCartPayload>) => {
			/* 			const isExistSize = state.items.some( // проверяем существует ли элемент в массиве с таким размером
				(item) => item.size === action.payload.size
			)

			if (!isExistSize)  // если существует ничего не делаем если нету то можно добавлять */
			state.items.push({ ...action.payload, id: state.items.length })
		},

		removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
			state.items = state.items.filter(item => item.id !== action.payload.id) // подгружаем все элементы кроме данного id
		},

		changeQuantity: (state, action: PayloadAction<IChangeQuantityPayload>) => {
			const { id, type } = action.payload
			const item = state.items.find(item => item.id === id)
			if (item) type === 'plus' ? item.quantity++ : item.quantity--
		}
	}
})

export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions
