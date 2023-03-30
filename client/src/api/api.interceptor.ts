import axios from 'axios'

import { errorCatch, getContentType } from './api.helper'
import {
	getAccessToken,
	removeTokensStorage
} from '@/services/auth/auth.helper'
import { AuthService } from '@/services/auth/auth.service'

export const API_URL = `${process.env.SERVER_URL}`

export const instance = axios.create({
	// создаём для того что бы сделать интерсептор и на req когда запрос идёт к серверу мы добовляем токен
	baseURL: API_URL,
	headers: getContentType()
})

instance.interceptors.request.use(config => {
	const accessToken = getAccessToken() // получаем токен из КУКОВ

	if (config.headers && accessToken) {
		// проверяем ХЕДЕР и ТОКЕН если они есть добовляем ТОКЕН в HEDER
		config.headers.Authorization = `Bearer ${accessToken}` // добовляем ТОКЕН в HEDER
	}
	return config
})

// instance response обрабатывает ответные данны
// к примеру если мы отправели запрос на сервак и сервер преслал ответ ощибка авторизации заканчился
//ТОКЕН то мы должны отправить на серв повторный запрос с обновление токена, отпровляем REFRESH токен на сервак и в ответ получаем новый АКСЕС токен и записываем его в КУКИ

instance.interceptors.response.use(
	config => config,
	async error => {
		// <=== обробатываем ссынарий ощибки
		const originalRequest = error.config
		if (
			(error.response.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provider') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				await AuthService.getNewToken()
				return instance.request(originalRequest)
			} catch {
				if (errorCatch(error) === 'jwwt expired') removeTokensStorage()
			}
		}
		throw error
	}
)

export default instance
