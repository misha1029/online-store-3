import Cookies from 'js-cookie'

import { IAuthResponse, IEmailPassword } from '@/store/user/user.interface'

import { axiosClassic } from '@/api/api.interceptor'

import { removeTokensStorage, saveToStorage } from './auth.helper'

export const AuthService = {
	async getNewToken() {
		const refreshToken = Cookies.get('refreshToken')

		const response = await axiosClassic.post<string, { data: IAuthResponse }>(
			'/login/access-token',
			{ refreshToken }
		)
		if (response.data.accessToken) saveToStorage(response.data)

		return response
	},

	async main(type: 'login' | 'register', data: IEmailPassword) {
		const response = await axiosClassic<IAuthResponse>({
			url: `/auth/${type}`,
			method: 'POST',
			data
		})
		if (response.data.accessToken) {
			saveToStorage(response.data)
		}
		return response.data
	},

	async logout() {
		removeTokensStorage()
	}
}
