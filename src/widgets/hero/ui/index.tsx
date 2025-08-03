import { FC } from 'react'
import style from './index.module.css'
import HeroSearch from './search'

const Hero: FC = () => {
	return (
		<div className={style.hero}>
			<h1 className={style.title}>
				eSIM карты с интернетом для путешествий и бизнеса
			</h1>
			<HeroSearch />
		</div>
	)
}

export default Hero
