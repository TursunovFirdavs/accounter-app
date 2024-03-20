import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allDebt: 0
}

const calculateAllDebt = createSlice({
    name: 'allDebt',
    initialState,
    reducers: {

    }
})

export default calculateAllDebt.reducer