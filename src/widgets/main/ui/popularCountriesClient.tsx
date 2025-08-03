'use client'

import { CountryI } from '@/src/entities/country/model/country'
import CountryCard from '@/src/entities/country/ui/card'
import { useCountriesStore } from '@/src/pages/home/model/countries'
import TextButton from '@/src/shared/ui/buttons/textButton'
import { FC, useEffect, useState } from 'react'
import style from './index.module.css'

interface PopularCountriesClientProps {
	countries: CountryI[]
}

const PopularCountriesClient: FC<PopularCountriesClientProps> = ({
	countries
}) => {
	const { setCountries } = useCountriesStore()
	const [showAll, setShowAll] = useState(true)
	const initialCount = 12

	const displayedCountries = showAll
		? countries
		: countries.slice(0, initialCount)
	const hasMoreCountries = countries.length > initialCount

	const handleShowAll = () => {
		setShowAll(true)
	}

	useEffect(() => {
		setCountries(countries)
		setShowAll(false)
	}, [])

	return (
		<>
			<div className={style.countries}>
				{displayedCountries.map(data => (
					<CountryCard key={data.id} country={data} />
				))}
			</div>
			{hasMoreCountries && !showAll && (
				<div className={style.loadMore}>
					<TextButton
						text='Показать все страны'
						onClick={handleShowAll}
					/>
				</div>
			)}
		</>
	)
}

export default PopularCountriesClient
