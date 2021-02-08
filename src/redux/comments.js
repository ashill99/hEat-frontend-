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
        updateComments: (state, action) => {
            state.comments = [...state.comments, action.payload ]
        }
    },
})

export const { addComments, updateComments } = commentsSlice.actions

export default commentsSlice.reducer