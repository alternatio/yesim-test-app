import CountryCard from '@/src/entities/country/ui/card'
import { useCountriesStore } from '@/src/pages/home/model/countries'
import { FC } from 'react'
import { useSearchStore } from '../model/searchStore'
import style from './index.module.css'

const SearchDropdown: FC = () => {
	const { searchQuery } = useSearchStore()
	const { countries } = useCountriesStore()

	const filteredCountries = countries.filter(
		country =>
			country.search?.findIndex(item =>
				item.toLowerCase().includes(searchQuery.toLowerCase())
			) !== -1
			|| country.country
				?.toLowerCase()
				.includes(searchQuery.toLowerCase())
	)

	return (
		<div className={style.dropdown} data-is-visible={!!searchQuery.length}>
			{filteredCountries.length ? (
				filteredCountries.map(country => (
					<CountryCard key={country.id} cardStyle={{
						padding: '0.625rem 1rem'
					}} country={country} onlyBody={true} />
				))
			) : (
				<span className={style.notFound}>Ничего не найдено :(</span>
			)}
		</div>
	)
}

export default SearchDropdown
