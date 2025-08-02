import Header from '@/src/widgets/header/ui'
import Hero from '@/src/widgets/hero/ui'
import MainContent from '@/src/widgets/main/ui'
import { FC } from 'react'
import style from './index.module.css'

const HomePage: FC = () => {
	return (
		<div className={style.page}>
			<Header />
			<div className={style.content}>
				<Hero />
				<MainContent />
			</div>
		</div>
	)
}

export default HomePage
