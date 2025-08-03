// zustand store
import { CountryI } from '@/src/entities/country/model/country'
import { create } from 'zustand'

interface CountriesStore {
	countries: CountryI[]
	setCountries: (countries: CountryI[]) => void
}

export const useCountriesStore = create<CountriesStore>(set => ({
	countries: [],
	setCountries: countries => set({ countries })
}))
