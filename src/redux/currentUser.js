import { createSlice } from '@reduxjs/toolkit'

const currentUserSlice = createSlice({
    name: "currentUser",
    initialState: {
        username: "",
        id: 0,
        comments: [],
    },
    reducers: {
        addCurrentUser: (state, action) => {

        state.username = action.payload.username,
        state.comments = action.payload.comments,
        state.id = action.payload.id
        },
    },
})

export const { addCurrentUser } = currentUserSlice.actions

export default currentUserSlice.reducer