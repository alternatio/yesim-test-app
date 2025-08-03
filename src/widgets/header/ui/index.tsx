import Logo from '@/src/shared/ui/logo'
import Link from 'next/link'
import { FC } from 'react'
import style from './index.module.css'

const Header: FC = () => {
	return (
		<header className={style.header}>
			<Link href={'/'}>
				<Logo />
			</Link>
		</header>
	)
}

export default Header
