import { createSlice } from '@reduxjs/toolkit'

const locationSlice = createSlice({
    name: "location",
    initialState: {
        items: [],
    },
    reducers: {
        addItems: (state, action) => {
            state.items = action.payload
        },
        updateLocations: (state, action) => {
            state.items = [...state.items, action.payload ]
        },
    },
})

export const { addItems, updateLocations } = locationSlice.actions

export default locationSlice.reducer