import { configureStore } from '@reduxjs/toolkit'
import allDebt from './all-debt'

export const store = configureStore({
    reducer: {
        allDebt
    }
})