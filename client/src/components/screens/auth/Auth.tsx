import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form/dist/types'

import { Heading } from '@/ui/Heading/Heading'
import Loading from '@/ui/Loading/Loading'
import Button from '@/ui/button/Button'
import Field from '@/ui/input/Field'
import Meta from '@/ui/meta/Meta'

import { IEmailPassword } from '@/store/user/user.interface'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import { useAuthRedirect } from './useAuthRedirect'
import { validEmail } from './valid-email'

const Auth: FC = () => {
	useAuthRedirect()
	const { isLoading } = useAuth()

	const { login, register } = useActions()

	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<IEmailPassword>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IEmailPassword> = data => {
		if (type === 'login') {
			login(data)
		} else {
			register(data)
		}
		reset()
	}

	return (
		<Meta title='Auth'>
			<section className='flex h-screen'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='rounded-lg bg-white shadow-sm p-8 m-auto'
				>
					<Heading className='capitalize text-center mb-4'>Auth</Heading>

					{isLoading ? (
						<Loading />
					) : (
						<>
							<Field
								{...formRegister('email', {
									required: 'Email is required',
									pattern: {
										value: validEmail,
										message: 'Please enter a valid email address'
									}
								})}
								placeholder={'Email:'}
								error={errors.email?.message}
							/>
							<Field
								{...formRegister('password', {
									required: 'Password is required',
									minLength: {
										value: 8,
										message: 'Min length should more 6 symbols'
									}
								})}
								type='password'
								placeholder={'Password:'}
								error={errors.password?.message}
							/>
							<div className='text-center'>
								<Button variant='orange'>Let`s Go</Button>
								<div>
									<button
										type='button'
										className='inline-block opacity-20 mt-3'
										onClick={() =>
											setType(type === 'login' ? 'register' : 'login')
										}
									>
										{type === 'login' ? 'Register' : 'Login'}
									</button>
								</div>
							</div>
						</>
					)}
				</form>
			</section>
		</Meta>
	)
}

export default Auth
