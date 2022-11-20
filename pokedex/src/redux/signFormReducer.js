import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    signIn: false
}


export const signFormReducer = createSlice({
    name: 'singForm',
    initialState,
    reducers: {
        signFormChanger: (state) => {
            (!state.signIn) ? state.signIn = true: state.signIn = false
        }
    }
})

export const { signFormChanger } = signFormReducer.actions;
export default signFormReducer.reducers