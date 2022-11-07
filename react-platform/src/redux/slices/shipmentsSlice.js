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
    },
    AddToShipmentsArray: (state,payload) => {
      state.value = [...state.value,payload.payload]
    },
    removeFromShipmentArray: (state,payload) => {
      state.value = state.value.filter((shipment) => shipment.id !== payload.payload.id)
    },
    updateSpecificShipment: (state,payload) => {
      console.log(payload)
      //get the index of the shipment
      const shipmentIndex = state.value.findIndex(shipment => shipment.id === payload.payload.id)
      state.value[shipmentIndex] = payload.payload
    }
  },
})

export const { updateShipmentsArray, AddToShipmentsArray, removeFromShipmentArray, updateSpecificShipment } = shipmentsSlice.actions

//shipment slice selectors
export const getShipmentsArray = (state) => state.shipments.value;

export default shipmentsSlice.reducer