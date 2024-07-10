import { configureStore } from "@reduxjs/toolkit"
import BurgerReducer from "./BurgerSlice";
import ContactFormReducer from "./ContactFormDataSlice";
import ContactFormInfoReducer from "./ContactFormInfoSlice";

export const store = configureStore( {
    reducer : {
        IsOpen : BurgerReducer,
        ContactFormData : ContactFormReducer,
        ContactFormInfo : ContactFormInfoReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;