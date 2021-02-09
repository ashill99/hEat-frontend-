import { createSlice } from '@reduxjs/toolkit'

const restTypeSlice = createSlice({
    name: "restType",
    initialState: {
        restType: "All",
    },
    reducers: {
        updateRestType: (state, action) => {
            state.restType = action.payload
        }
    },
})

export const { updateRestType } = restTypeSlice.actions

export default restTypeSlice.reducer