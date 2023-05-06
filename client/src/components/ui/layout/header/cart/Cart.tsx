import cn from 'clsx'
import { FC } from 'react'
import { FiShoppingCart } from 'react-icons/fi'

import SquereButton from '@/ui/squere-button/SquereButton'

import { useCart } from '@/hooks/useCart'
import { useOutside } from '@/hooks/useOutside'

import { formatToCurrency } from '@/utils/format-to-currency'

import styles from './Cart.module.scss'
import CartItem from './cart-item/CartItem'

const Cart: FC = () => {
	const { isShow, setIsShow, ref } = useOutside(false)

	const { items, total } = useCart()

	/* 	const { push } = useRouter() */

	/* 	const { mutate } = useMutation(
		['create payment'],
		() => PaymentService.createPayment(total),
		{
			onSuccess(data) {
				push(data.confirmation.confirmation_url)
			}
		}
	) */

	return (
		<div className='relative' ref={ref}>
			<SquereButton
				Icon={FiShoppingCart}
				onClick={() => setIsShow(!isShow)}
				number={items.length}
			/>
			<div
				className={cn(
					'absolute top-[4.6rem] w-80 -left-[12.5rem] bg-secondary rounded-xl px-5 py-3 text-sm menu z-20 text-white',
					isShow ? 'open-menu' : 'close-menu'
				)}
			>
				<div className='font-normal mb-5 text-lg'>My cart</div>
				<div className={styles.cart}>
					{items.length ? (
						items.map(item => <CartItem item={item} key={item.id} />)
					) : (
						<div className='font-light'>Basket is empty!</div>
					)}
				</div>
				<div className={styles.footer}>
					<div>Total:</div>
					<div>{formatToCurrency(total)}</div>
				</div>
				<div className='text-center mb-2  mt-5'>
					<button className='btn-style' onClick={() => /* mutate() */ {}}>
						Please order
					</button>
				</div>
			</div>
		</div>
	)
}

export default Cart
