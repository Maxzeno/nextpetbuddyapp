import { createSlice } from '@reduxjs/toolkit'

export const totalPriceSlice = createSlice({
    name: 'totalPrice',
    initialState: {
        value: 1000,
    },
    reducers: {
        setAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setAmount } = totalPriceSlice.actions

export default totalPriceSlice.reducer