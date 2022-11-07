import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const shipmentsSlice = createSlice({
  name: 'shipments',
  initialState,
  reducers: {
    updateShipmentsArray: (state) => {

    },
    AddToShipmentsArray: (state) => {
        
    },
  },
})

export const { updateShipmentsArray, AddToShipmentsArray } = shipmentsSlice.actions

export default shipmentsSlice.reducer