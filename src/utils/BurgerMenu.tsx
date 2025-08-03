import React from 'react'

type BurgerMenuProps = {
	menuActive: boolean
	setMenuActive: (value: boolean) => void
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({
	menuActive,
	setMenuActive,
}) => {
	return (
		<button
			onClick={() => setMenuActive(!menuActive)}
			className='flex flex-col justify-center items-center w-8 h-8 space-y-1'
			aria-label='Toggle menu'
		>
			<span
				className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${
					menuActive ? 'rotate-45 translate-y-1.5' : ''
				}`}
			/>
			<span
				className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${
					menuActive ? 'opacity-0' : ''
				}`}
			/>
			<span
				className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${
					menuActive ? '-rotate-45 -translate-y-1.5' : ''
				}`}
			/>
		</button>
	)
}

export default BurgerMenu
