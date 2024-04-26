import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isDollar: true
}

const calculateAllDebt = createSlice({
    name: 'isDollar',
    initialState,
    reducers: {
        changeValyut: (state) => {
            return {...state, isDollar: !state.isDollar}
        }
    }
})

export default calculateAllDebt.reducer

export const { changeValyut } = calculateAllDebt.actions