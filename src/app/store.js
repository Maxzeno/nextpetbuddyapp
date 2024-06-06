import { configureStore } from '@reduxjs/toolkit'
import totalPriceReducer from '../features/counter/totalPriceSlice'

export default configureStore({
    reducer: {
        totalPrice: totalPriceReducer,
    },
})