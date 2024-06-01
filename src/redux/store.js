import { configureStore } from '@reduxjs/toolkit'
import isDollar from './all-debt'
import isFirm from './is-firm'

export const store = configureStore({
    reducer: {
        isDollar,
        isFirm
    }
})