import { Provider } from 'react-redux'
import { render, screen, fireEvent } from '@testing-library/react-native'

import App from '../App'
import CountrySearchBar from '../src/components/CountrySearchBar'
import store from '../src/stores'


test('renders App', () => {
  render(
    <App />
  )
})

test('CountrySearchBar filters', () => {
  render(
    <Provider store={store}>
      <CountrySearchBar />
    </Provider>
  )

  const input = screen.getByPlaceholderText('Where next?')

  fireEvent.changeText(input, 'i')
  let filteredCountries = store.getState().countries.filteredCountries
  let allCountries = store.getState().countries.allCountries

  expect(filteredCountries.length).toEqual(allCountries.length) // search not started yet for one letter

  fireEvent.changeText(input, 'it')
  filteredCountries = store.getState().countries.filteredCountries
  expect(filteredCountries.length).toEqual(2) // Italy, United States

  fireEvent.changeText(input, 'ita')
  filteredCountries = store.getState().countries.filteredCountries
  expect(filteredCountries.length).toEqual(1) // Italy

})



