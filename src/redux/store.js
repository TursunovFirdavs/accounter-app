import { configureStore } from '@reduxjs/toolkit'
import isDollar from './all-debt'
import isFirm from './is-firm'
import { saveState } from '../storage'

export const store = configureStore({
    reducer: {
        isDollar,
        isFirm
    }
})

store.subscribe(() => {
    saveState('isFirm', store.getState().isFirm)
})