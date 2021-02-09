import { createSlice } from '@reduxjs/toolkit'

const restBarSlice = createSlice({
    name: "restBar",
    initialState: {
        restBar: "All",
    },
    reducers: {
        updateRestBar: (state, action) => {
            state.restBar = action.payload
        }
    },
})

export const { updateRestBar } = restBarSlice.actions

export default restBarSlice.reducer