import { configureStore } from '@reduxjs/toolkit'
import isDollar from './all-debt'

export const store = configureStore({
    reducer: {
        isDollar
    }
})