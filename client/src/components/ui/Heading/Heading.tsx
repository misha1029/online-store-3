import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'

export const Heading: FC<PropsWithChildren<{ className?: string }>> = ({
	children,
	className
}) => {
	return <h1 className={cn('font-semibold text-3xl', className)}>{children}</h1>
}
