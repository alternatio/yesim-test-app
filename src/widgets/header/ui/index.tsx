import Logo from '@/src/shared/ui/logo'
import { FC } from 'react'
import style from './index.module.css'

const Header: FC = () => {
	return (
		<header className={style.header}>
			<Logo />
		</header>
	)
}

export default Header
