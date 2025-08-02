import SearchIcon from '@/src/shared/ui/icons/search'
import Input from '@/src/shared/ui/input'
import { FC } from 'react'
import style from './index.module.css'

const Hero: FC = () => {
	return (
		<div className={style.hero}>
			<h1 className={style.title}>
				eSIM карты с интернетом для путешествий и бизнеса
			</h1>
			<Input placeholder='Найти направление' prefix={<SearchIcon />} />
		</div>
	)
}

export default Hero
