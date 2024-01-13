import { configureStore, createSlice } from '@reduxjs/toolkit'
import COUNTRIES_DATA, { CountryType } from '../data/countries';

export type CountriesState = {
  allCountries: CountryType[];
  filteredCountries: CountryType[];
}
const initialState: CountriesState = {
  allCountries: COUNTRIES_DATA,
  filteredCountries: COUNTRIES_DATA,
}

const countriesSlice = createSlice({
  name: 'countries',
  initialState: initialState,
  reducers: {
    setSearchKey(state, action) {
      const { searchKey } = action.payload
      const { allCountries } = state
      if (searchKey.length <= 1) {
        state.filteredCountries = allCountries
      } else {
        state.filteredCountries = allCountries.filter(
          c => c.label.toLowerCase().indexOf(searchKey.toLowerCase()) != -1
        )
      }
    }
  }
})

export default countriesSlice
export const countriesActions = countriesSlice.actions