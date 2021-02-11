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
        },
        updateCommentLikes: (state, action) => {
            const foundComment = state.comments.find(comment => comment.id === action.payload.id)
            console.log(foundComment)
            foundComment.likes = action.payload.likes 
            console.log(foundComment)
        }
    },
})

export const { addComments, updateComments, updateCommentLikes } = commentsSlice.actions

export default commentsSlice.reducer