import { FC } from 'react'
import style from './index.module.css'

interface SearchDropdownProps {
	searchQuery: string
}

const SearchDropdown: FC<SearchDropdownProps> = ({ searchQuery }) => {
	return (
		<div className={style.dropdown} data-is-visible={!!searchQuery.length}>
			<span className={style.notFound}>Ничего не найдено :(</span>
		</div>
	)
}

export default SearchDropdown
