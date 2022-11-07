import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const shipmentsSlice = createSlice({
  name: 'shipments',
  initialState,
  reducers: {
    updateShipmentsArray: (state,action) => {
      state.value = action.payload
      console.log(state.value)
    },
    AddToShipmentsArray: (state) => {
        
    },
  },
})

export const { updateShipmentsArray, AddToShipmentsArray } = shipmentsSlice.actions

//shipment slice selectors
export const getShipmentsArray = (state) => state.shipments.value;

export default shipmentsSlice.reducer