import { configureStore } from '@reduxjs/toolkit'

// slices import
import shipmentsReducer from './slices/shipmentsSlice'

export const store = configureStore({
  reducer: {
    shipments: shipmentsReducer
  },
})