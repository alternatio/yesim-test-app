import CountryCard from '@/src/entities/country/ui/card'
import { useCountriesStore } from '@/src/pages/home/model/countries'
import { FC, useEffect, useRef } from 'react'
import { useSearchStore } from '../model/searchStore'
import style from './index.module.css'

const SearchDropdown: FC = () => {
	const searchRef = useRef<HTMLDivElement>(null)
	const { searchQuery, setSearchQuery, isDropdownVisible, showDropdown } = useSearchStore()
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

	const handleClickOutside = (event: MouseEvent) => {
		if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
			showDropdown(false)
		}
	};

	useEffect(() => {
		window.addEventListener('mousedown', handleClickOutside);
		return () => {
			window.removeEventListener('mousedown', handleClickOutside);
		};
	}, [])

	return (
		<div className={style.dropdown} data-is-visible={isDropdownVisible} ref={searchRef}>
			{filteredCountries.length ? (
				filteredCountries.map(country => (
					<CountryCard
						onClick={() => setSearchQuery('')}
						key={country.id}
						country={country}
						onlyBody={true}
					/>
				))
			) : (
				<span className={style.notFound}>Ничего не найдено :(</span>
			)}
		</div>
	)
}

export default SearchDropdown
