import { create } from 'zustand'

interface SearchStore {
	searchQuery: string
	setSearchQuery: (value: string) => void

	isDropdownVisible: boolean
	showDropdown: (value: boolean) => void

}

export const useSearchStore = create<SearchStore>(set => ({
	searchQuery: '',
	setSearchQuery: value => set({ searchQuery: value, isDropdownVisible: !!value.length }),

	isDropdownVisible: false,
	showDropdown: value => set({ isDropdownVisible: value }),
}))
