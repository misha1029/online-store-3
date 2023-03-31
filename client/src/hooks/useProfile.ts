import { useQuery } from '@tanstack/react-query'

import { useAuth } from './useAuth'
import { UserService } from '@/services/user.service'

export const userProfile = () => {
	const { user } = useAuth()
	const { data } = useQuery(['get profile'], () => UserService.getProfile(), {
		select: ({ data }) => data,
		enabled: !!user
	})
	return { profile: data }
}
