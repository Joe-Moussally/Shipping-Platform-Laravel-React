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
    removeFromShipmentArray: (state,payload) => {
      state.value = state.value.filter((shipment) => shipment.id !== payload.id)
    }
  },
})

export const { updateShipmentsArray, AddToShipmentsArray, removeFromShipmentArray } = shipmentsSlice.actions

//shipment slice selectors
export const getShipmentsArray = (state) => state.shipments.value;

export default shipmentsSlice.reducer