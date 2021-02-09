import { createSlice } from '@reduxjs/toolkit'

const faveSlice = createSlice({
    name: "fave",
    initialState: {
        items: [],
    },
    reducers: {
        addFaves: (state, action) => {
            state.items = [...state, action.payload]
        },
    },
})

export const { addFaves } = faveSlice.actions

export default faveSlice.reducer