'use client'

import SearchIcon from '@/src/shared/ui/icons/search'
import Input from '@/src/shared/ui/input'
import { useSearchStore } from '../model/searchStore'
import style from './index.module.css'
import SearchDropdown from './searchDropdown'

const HeroSearch = () => {
	const { searchQuery, setSearchQuery } = useSearchStore()

	const handleSearch = (value: string) => {
		setSearchQuery(value)
		console.log(value)
	}

	return (
		<div className={style.search}>
			<Input
				placeholder='Найти направление'
				prefix={<SearchIcon />}
				value={searchQuery}
				onChange={value => handleSearch(value.target.value)}
			/>
			<SearchDropdown />
		</div>
	)
}

export default HeroSearch
