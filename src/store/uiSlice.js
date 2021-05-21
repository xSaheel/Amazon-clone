import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isLoading: false,
    },
    reducers: {
        setIsLoading(state, actions) {
            state.isLoading = actions.payload;
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice;