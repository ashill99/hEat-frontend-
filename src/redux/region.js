import { createSlice } from '@reduxjs/toolkit'

const regionSlice = createSlice({
    name: "region",
    initialState: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.06,
        longitudeDelta: 0.06
    },
    reducers: {
        addRegion: (state, action) => {

        state.latitude = action.payload.latitude,
        state.longitude = action.payload.longitude
        },
    },
})

export const { addRegion } = regionSlice.actions

export default regionSlice.reducer