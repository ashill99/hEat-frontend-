import { createSlice } from '@reduxjs/toolkit'

const currentLocationSlice = createSlice({
    name: "currentLocation",
    initialState: {
        name: "",
        address: "",
        restOrBar: "",
        restType: "",
        rating: 0,
        longitude: 0,
        latitude: 0,
        id: 0,
        comments: [],
    },
    reducers: {
        addLocation: (state, action) => {

        state.name = action.payload.name,
        state.address = action.payload.address,
        state.restOrBar = action.payload.restOrBar,
        state.restType = action.payload.restType,
        state.rating = action.payload.rating,
        state.longitude = action.payload.longitude,
        state.latitude = action.payload.latitude,
        state.id = action.payload.id,
        state.comments = action.payload.comments

        },
    },
})

export const { addLocation } = currentLocationSlice.actions

export default currentLocationSlice.reducer