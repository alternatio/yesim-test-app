import Image from 'next/image'
import { FC } from 'react'

const SearchIcon: FC = () => {
	return (
		<Image src={'/search-icon.svg'} alt='Search' width={20} height={20} />
	)
}

export default SearchIcon
