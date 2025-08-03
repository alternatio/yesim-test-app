import Logo from '@/src/shared/ui/logo'
import Link from 'next/link'
import { FC } from 'react'
import style from './index.module.css'

const Header: FC = () => {
	return (
		<header className={style.header}>
			<div className={style.headerWrapper}>
				<Link href={'/'}>
					<Logo />
				</Link>
			</div>
		</header>
	)
}

export default Header
