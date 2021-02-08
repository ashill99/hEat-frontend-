import { configureStore } from '@reduxjs/toolkit'
import locationReducer from './location'
import currentLocationReducer from './currentLocation'
import commentsReducer from './comments'

const store = configureStore({
    reducer: {
        location: locationReducer,
        currentLocation: currentLocationReducer,
        comments: commentsReducer
    },
})

export default store 