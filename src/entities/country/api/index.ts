import { CountriesI } from '../model/country'

export class CountryApi {
	async fetchCountries(): Promise<CountriesI> {
		const res = await fetch(
			'https://api3.yesim.cc/sale_list?force_type=countries&lang=ru'
		)
		const data: CountriesI = await res.json()
		return data
	}
}
