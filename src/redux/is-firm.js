import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isFirm: 'firma'
}

const checkIsFirm = createSlice({
    name: 'isFirm',
    initialState,
    reducers: {
        changeFirm: (state, action) => {
            return {...state, isFirm: action.payload}
        }
    }
})

export default checkIsFirm.reducer

export const { changeFirm } = checkIsFirm.actions