import { CountryApi } from '@/src/entities/country/api'
import { CountryI } from '@/src/entities/country/model/country'
import { FC } from 'react'
import style from './index.module.css'
import PopularCountriesClient from './popularCountriesClient'

const PopularCountries: FC = async () => {
	// for seo
	const countryApi = new CountryApi()
	const countries = await countryApi.fetchCountries()

	const countriesData = countries.countries
	const ruCountries: CountryI[] = countriesData?.['ru'] || []

	return (
		<div className={`${style.card} ${style.popularCountries}`}>
			<h2 className={style.title}>Популярные страны</h2>
			<PopularCountriesClient countries={ruCountries} />
		</div>
	)
}

export default PopularCountries
