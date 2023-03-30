import Image from 'next/image'
import { FC } from 'react'

import image from './loading.svg'

const Loading: FC = () => {
	return <Image src={image} height={100} width={100} alt='loading' />
}

export default Loading
