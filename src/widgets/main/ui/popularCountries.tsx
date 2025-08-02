import { FC } from 'react'
import style from './index.module.css'

const PopularCountries: FC = () => {
	return (
		<div className={`${style.card} ${style.popularCountries}`}>
			<h2 className={style.title}>Популярные страны</h2>
		</div>
	)
}

export default PopularCountries
