import { CountryI } from '@/src/entities/country/model/country'
import Header from '@/src/widgets/header/ui'
import HowItsWork from '@/src/widgets/howItWorks/ui'
import Image from 'next/image'
import { FC } from 'react'
import style from './index.module.css'

interface CountryPageProps {
	country: CountryI
}

const CountryPage: FC<CountryPageProps> = ({ country }) => {
	return (
		<div className={style.page}>
			<Header />
			<div className={style.content}>
				<main className={style.main}>
					<div className={style.countryHeader}>
						<div className={style.countryInfo}>
							<h1 className={style.countryTitle}>
								{country.country}
							</h1>
							<p className={style.countryDescription}>
								Туристические SIM-карты с интернетом
							</p>
						</div>
						<div className={style.flagWrapper}>
							<Image
								src={`/flags/${country.iso?.toLowerCase()}.svg`}
								alt={country.iso ?? 'country iso'}
								width={32}
								height={32}
							/>
						</div>
					</div>
					<HowItsWork />
				</main>
			</div>
		</div>
	)
}

export default CountryPage
