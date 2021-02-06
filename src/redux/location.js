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
    },
})

export const { addItems } = locationSlice.actions

export default locationSlice.reducer