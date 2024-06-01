import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../storage";

const initialState = loadState('isFirm') || {
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