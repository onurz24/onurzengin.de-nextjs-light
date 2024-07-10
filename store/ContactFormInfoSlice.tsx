// BurgerSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import { FaInfoCircle } from 'react-icons/fa';
import { MdWarning } from "react-icons/md";
import { BsFillSendCheckFill } from "react-icons/bs";


const initialState = {
    Text: "Bitte füllen sie alle erforderlichen Felder aus",
    Icon: <FaInfoCircle/>,
}
const ContactFormInfoSlice = createSlice({
    name: 'ContactFormInfo',
    initialState,
    reducers: {
        Update : (state,action) => {
            return state = action.payload;
        },
        UpdateText : (state,action) => {
            return state.Text = action.payload;
        },
        UpdateIcon : (state,action) : any => {
            switch(action.payload){
                case "Warning":
                    return state.Icon = <MdWarning/>;
                    break;
                case "Info":
                    return state.Icon = <FaInfoCircle/>;
                    break;
                case "Sucess":
                    return state.Icon = <BsFillSendCheckFill/>;
                    break;
            }
        },
    },
});

export const { Update } = ContactFormInfoSlice.actions;
export default ContactFormInfoSlice.reducer;

