import { CountryApi } from '@/src/entities/country/api'
import { CountryI } from '@/src/entities/country/model/country'
import CountryCard from '@/src/entities/country/ui/card'
import TextButton from '@/src/shared/ui/buttons/textButton'
import { FC } from 'react'
import style from './index.module.css'

const PopularCountries: FC = async () => {
	// for seo
	const countryApi = new CountryApi()
	const countries = await countryApi.fetchCountries()

	const countriesData = countries.countries
	const ruCountries: CountryI[] = countriesData?.['ru'] || []

	return (
		<div className={`${style.card} ${style.popularCountries}`}>
			<h2 className={style.title}>Популярные страны</h2>
			<div className={style.countries}>
				{ruCountries.map(data => (
					<CountryCard
						key={data.id}
						country={data}
					/>
				))}
			</div>
			<div className={style.loadMore}>
				<TextButton text='Показать все страны' />
			</div>
		</div>
	)
}

export default PopularCountries
