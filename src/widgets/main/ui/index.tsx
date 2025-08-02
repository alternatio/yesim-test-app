import { FC } from 'react'
import style from './index.module.css'
import PopularCountries from './popularCountries'

const MainContent: FC = () => {
	return (
		<main className={style.main}>
			<PopularCountries />
		</main>
	)
}

export default MainContent
