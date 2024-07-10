'use client';

import { Update } from "@/store/ContactFormDataSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface ContactFormProps {};


export const ContactForm = ({} : ContactFormProps) => {

    const FormData = useSelector((state : any) => state.ContactFormData);
    const dispatch = useDispatch();

/*     useEffect(()=>{
        console.table(FormData)
    }, [FormData]) */
    return(
        <form className='Contact_Form'>

            <div className="Contact_NameMail_Container">

                <input className='Contact_Name_Input'
                    onChange={e => dispatch(Update({...FormData, Name: e.target.value}))}
                    type="text"
                    name='cc-name'
                    autoComplete='cc-name'
                    placeholder='Vor/Nachname*' required/>

                <input className='Contact_Mail_Input'
                    onChange={e => dispatch(Update({...FormData, Email: e.target.value}))}
                    autoComplete='email'
                    type="email" placeholder='E-Mail*' required/>
            </div>

            <div className="Contact_SubjectPhone_Container">

                <input className='Contact_Subject_Input'
                    onChange={e => dispatch(Update({...FormData, Subject: e.target.value}))}
                    type="text"
                    required
                    placeholder='Betreff*'/>

                <input
                    className='Contact_Phone_Input'
                    onChange={e => dispatch(Update({...FormData, Phone: e.target.value}))}
                    type="tel"
                    autoComplete='tel' placeholder='Telefonnummer'/>

            </div>

            <div className="Contact_Message_Container">
                <textarea name="" id=""
                    onChange={e => dispatch(Update({...FormData, Message: e.target.value}))}
                    cols={30} rows={10} placeholder='Ihre Nachricht'></textarea>
            </div>

        </form>
    )
}