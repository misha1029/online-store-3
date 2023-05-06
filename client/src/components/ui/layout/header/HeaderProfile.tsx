import Image from 'next/image'
import { FC } from 'react'

import { userProfile } from '@/hooks/useProfile'

const HeaderProfile: FC = () => {
	const { profile } = userProfile()
	return (
		<div>
			{profile?.avatarPath && (
				<Image
					width={43}
					height={43}
					src={profile?.avatarPath}
					alt='profile'
					className='rounded-full border-primary border border-solid animate-opacity'
				/>
			)}
		</div>
	)
}

export default HeaderProfile
