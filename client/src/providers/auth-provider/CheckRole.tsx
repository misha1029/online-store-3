import { useRouter } from 'next/router'
import { FC, PropsWithChildren } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { TypeComponentAuthFields } from './auth-page.types'

const CheckRole: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
	Component: { isOnlyUser },
	children
}) => {
	const { user } = useAuth()

	const router = useRouter()

	if (user && isOnlyUser) return <>{children}</> // проверяем есть ли юзер и нуждаеться ли страница в авторизации
	router.pathname !== '/auth' && router.replace('/auth')
	return null
}

export default CheckRole
