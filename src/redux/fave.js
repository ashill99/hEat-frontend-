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
        updateFaves: (state, action) => {
            state.items = [...state.items, action.payload ]
        },
        deleteFave: (state, action) => {
        state.items = state.filter(fave => fave.id !== action.payload.id)
        }
    }
})

export const { addFaves, updateFaves, deleteFave } = faveSlice.actions

export default faveSlice.reducer