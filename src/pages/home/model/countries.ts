// zustand store
import { CountriesI } from '@/src/entities/country/model/country'
import { create } from 'zustand'

interface CountriesStore {
	countries: CountriesI
	setCountries: (countries: CountriesI) => void
}

export const useCountriesStore = create<CountriesStore>(set => ({
	countries: [],
	setCountries: countries => set({ countries })
}))
