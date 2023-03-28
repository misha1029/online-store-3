import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistReducer,
	persistStore
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { carouselReducer } from './carousel/carousel.slice'
import { cartReducer } from './cart/cart.slice'
import { userReducer } from './user/user.slise'

const persistConfig = {
	key: 'online-store-3',
	storage,
	whitelist: ['cart']
}

const rootReducer = combineReducers({
	cart: cartReducer,
	carousel: carouselReducer,
	user: userReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		})
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof store.getState>
