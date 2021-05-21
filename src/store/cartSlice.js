import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemList: [],
        cartSize: 0,
    },
    reducers: {
        addItem(state, actions) {
            const item = actions.payload;
            const existingItem = state.itemList.find(element => element.id === item.id);
            if(existingItem){
                existingItem.price = (existingItem.price/existingItem.quantity)*(existingItem.quantity + 1);
                existingItem.quantity++;
            }
            else{
                state.itemList = [...state.itemList, item];
            }
        },

        removeItem(state, actions) {
            const item = actions.payload;
            const existingItem = state.itemList.find(element => element.id === item.id);
            if(existingItem){
                existingItem.price = (existingItem.price/existingItem.quantity)*(existingItem.quantity - 1);
                existingItem.quantity--;
            }
            else{
                state.itemList = state.itemList.filter(element => element.id === item.id);
            }
        },

        calculateCartSize(state) {
            const items = state.itemList;
            let totalItems = 0;
            items.map(item => totalItems += (item.quantity));
            state.cartSize = totalItems;
        }        
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice;