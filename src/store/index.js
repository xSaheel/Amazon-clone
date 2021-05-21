import { configureStore } from '@reduxjs/toolkit';

import cartSlice from './cartSlice';
import uiSlice from './uiSlice';

const store = configureStore({
    reducer: {cart : cartSlice.reducer, ui : uiSlice.reducer},
    'devTools': window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
})

export default store;
