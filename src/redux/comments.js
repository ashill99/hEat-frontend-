import { createSlice } from '@reduxjs/toolkit'

const commentsSlice = createSlice({
    name: "comments",
    initialState: {
        comments: [],
    },
    reducers: {
        addComments: (state, action) => {
            state.comments = action.payload
        },
    },
})

export const { addComments } = commentsSlice.actions

export default commentsSlice.reducer