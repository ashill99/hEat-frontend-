import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
    name: "search",
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
        updateSearch: (state, action) => {
            state.search = action.payload
        }
    },
})

export const { updateSearch } = searchSlice.actions

export default searchSlice.reducer