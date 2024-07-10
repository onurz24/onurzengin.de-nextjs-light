// BurgerSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const initialState : boolean = false;
const BurgerSlice = createSlice({
    name: 'IsOpen',
    initialState,
    reducers: {
        Toggle : state => !state
    },
});

export const { Toggle } = BurgerSlice.actions;
export default BurgerSlice.reducer;

