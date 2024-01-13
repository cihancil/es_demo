import { configureStore, createSlice } from '@reduxjs/toolkit'

import countriesSlice from "./countriesStore"

const store = configureStore({
  reducer: { countries: countriesSlice.reducer },
})

export type RootState = ReturnType<typeof store.getState>
export default store