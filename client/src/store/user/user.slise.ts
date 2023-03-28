import { createSlice } from '@reduxjs/toolkit'

import { checkAuth, login, logout, register } from './user.actions'
import { IInitialState } from './user.interface'

const initialState: IInitialState = {
	user: localStorage.getItem('user')
		? JSON.parse(localStorage.getItem('user') as string)
		: null,
	isLoading: false
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(register.pending, state => {
				state.isLoading = true
			})
			.addCase(register.fulfilled, (state, action) => {
				state.isLoading = false
				state.user = action.payload.user
			})
			.addCase(register.rejected, state => {
				state.isLoading = false
				state.user = null
			})

			.addCase(login.pending, state => {
				state.isLoading = true
			})
			.addCase(login.fulfilled, (state, action) => {
				state.isLoading = false
				state.user = action.payload.user
			})
			.addCase(login.rejected, state => {
				state.isLoading = false
				state.user = null
			})

			.addCase(logout.fulfilled, state => {
				state.isLoading = false
				state.user = null
			})

			.addCase(checkAuth.fulfilled, (state, action) => {
				state.user = action.payload.user
			})
	}
})

export const userReducer = userSlice.reducer
export const userActions = userSlice.actions