export interface CountryI {
	id?: string
	country?: string
	iso?: string
	search?: string[]
	url?: string
	path?: string
	classic_info?: CountryClassicInfoI
	psg_info?: string
	package_included?: CountryIncludedI[]
}

export interface CountryClassicInfoI {
	new?: boolean
	popular?: string
	price_per_gb?: string
	price_per_day?: string
}

export interface CountryIncludedI {
	id?: string
}

export interface CountriesI {
	countries?: Record<string, CountryI[]>
}
