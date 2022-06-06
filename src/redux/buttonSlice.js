import { createSlice } from "@reduxjs/toolkit";

const buttonSlice = createSlice({
    name: "button",
    initialState: {
        textButton: "",
    },
    reducers: {
        updateButton: (state, action) => {
            state.textButton = action.payload;
        }
    }
})

export const { updateButton } = buttonSlice.actions;

export default buttonSlice.reducer;