import Link from 'next/link'
import React, { FC } from 'react'
import { FiSearch } from 'react-icons/fi'

import styles from './Search.module.scss'

export const Search: FC<any> = () => {
	const inputRef = React.useRef<HTMLInputElement>(null)

	const [value, setValue] = React.useState('')

	/* 	const onClickclear = () => {
		setValue('')
		if (inputRef.current) {
			inputRef.current.focus()
		}
		inputRef.current?.focus()
	} */

	const onChangeInput = (event: any) => {
		setValue(event.target.value)
	}

	return (
		<div className={styles.root}>
			<input
				ref={inputRef}
				value={value}
				onChange={onChangeInput}
				className={styles.input}
				placeholder='Search currency name ...'
			/>
			<Link href={`/q?term=${value}`} className='text-white'>
				<FiSearch size={28} />
			</Link>
		</div>
	)
}
