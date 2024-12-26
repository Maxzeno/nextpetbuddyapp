import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import totalPriceReducer from '../features/counter/totalPriceSlice'

export default configureStore({
    reducer: {
        counter: counterReducer,
        totalPrice: totalPriceReducer,
    },
})