import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    sidebar: false,
    sidecart: false,
}

export const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        setSidebar: (state, action) => {
            state.sidebar = action.payload
        },
        setSidecart: (state, action) => {
            state.sidecart = action.payload
        },
    },
})

export const { setSidebar, setSidecart } = uiSlice.actions

export default uiSlice.reducer