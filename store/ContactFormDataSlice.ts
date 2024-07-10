// BurgerSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    Name: "",
    Email: "",
    Subject: "",
    Phone: "",
    Message: "",
}
const ContactFormDataSlice = createSlice({
    name: 'ContactFormData',
    initialState,
    reducers: {
        Update : (state,action) => {
            return state = action.payload;
        }
    },
});

export const { Update } = ContactFormDataSlice.actions;
export default ContactFormDataSlice.reducer;

