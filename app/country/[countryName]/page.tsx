import { CountryApi } from '@/src/entities/country/api'
import CountryPage from '@/src/pages/country/ui'
import { notFound } from 'next/navigation'
import { FC } from 'react'

interface CountryPageProps {
	params: Promise<{
		countryName: string
	}>
}

async function findCountry(url: string) {
	const countryApi = new CountryApi()
	const countries = await countryApi.fetchCountries()

	for (const c of Object.values(countries.countries || {})) {
		const country = c.find(c => {
			console.log(c.url, url)
			return c.url === url
		})
		if (country) {
			return country
		}
	}

	return null
}

const CountryPageRoute: FC<CountryPageProps> = async ({ params }) => {
	const { countryName } = await params

	const foundCountry = await findCountry(`/country/${countryName}/`)
	if (!foundCountry) {
		notFound()
	}

	return <CountryPage country={foundCountry} />
}

export default CountryPageRoute

// seo
export async function generateMetadata({ params }: CountryPageProps) {
	const { countryName } = await params
	const foundCountry = await findCountry(`/country/${countryName}/`)
	if (!foundCountry) {
		return {
			title: 'Страна не найдена'
		}
	}
	const priceText = foundCountry.classic_info?.price_per_gb
		? ` от ${foundCountry.classic_info.price_per_gb} ₽/ГБ`
		: ''
	return {
		title: `${foundCountry.country} - eSIM тарифы${priceText}`,
		description: `Купить eSIM для ${foundCountry.country}. ${foundCountry.classic_info?.price_per_gb ? `Цена от ${foundCountry.classic_info.price_per_gb} ₽/ГБ.` : ''} Быстрая активация и надежная связь.`
	}
}

// generate static pages
export async function generateStaticParams() {
	const countryApi = new CountryApi()
	const countries = await countryApi.fetchCountries()
	const slugs: string[] = []
	Object.values(countries.countries || {}).forEach(countryGroup => {
		countryGroup.forEach(country => {
			if (country.url) {
				const slug = country.url.includes('/')
					? country.url.split('/').pop()
					: country.url
				if (slug && !slugs.includes(slug)) {
					slugs.push(slug)
				}
			}
		})
	})
	return slugs.map(slug => ({
		countryName: slug
	}))
}
