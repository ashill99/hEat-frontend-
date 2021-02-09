import { configureStore } from '@reduxjs/toolkit'
import locationReducer from './location'
import currentLocationReducer from './currentLocation'
import commentsReducer from './comments'
import restBarReducer from './restBar'
import restTypeReducer from './restType' 
import searchReducer from './search'
import faveReducer from './fave'

const store = configureStore({
    reducer: {
        location: locationReducer,
        currentLocation: currentLocationReducer,
        comments: commentsReducer,
        restBar: restBarReducer,
        restType: restTypeReducer,
        search: searchReducer,
        fave: faveReducer
    },
})

export default store 