'use client'

import ChevronIcon from '@/src/shared/ui/icons/chevron'
import Image from 'next/image'
import Link from 'next/link'
import { CSSProperties, FC } from 'react'
import { CountryI } from '../model/country'
import style from './index.module.css'

interface CountryCardProps {
	country: CountryI
	cardStyle?: CSSProperties
	cardClassName?: string
	onlyBody?: boolean
	onClick?: () => void
}

const CountryCard: FC<CountryCardProps> = ({
	country,
	cardStyle,
	cardClassName,
	onlyBody,
	onClick,
}) => {
	if (country.url) {
		const href = country.url
		return (
			<Link
				onClick={onClick}
				href={href}
				className={`${style.card} ${cardClassName}`}
				style={cardStyle}
				data-only-body={!!onlyBody}
				title={country.country}
			>
				<div className={style.cardWrapper}>
					<div className={style.content}>
						<div className={style.flagWrapper}>
							<Image
								src={`/flags/${country.iso?.toLowerCase()}.svg`}
								alt={country.iso ?? 'country iso'}
								width={32}
								height={32}
							/>
						</div>
						<div className={style.info}>
							<span className={style.title}>{country.country}</span>
							<span className={style.price}>
								{country.classic_info?.price_per_gb + ' ₽/ГБ'}
							</span>
						</div>
					</div>
					<ChevronIcon />
				</div>
			</Link>
		)
	} else {
		return null
	}
}

export default CountryCard
