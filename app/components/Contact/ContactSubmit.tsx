'use client';
import { Update } from "@/store/ContactFormInfoSlice";
import { FaInfoCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

export const ContactSubmit = () => {

    const FormData = useSelector((state : any) => state.ContactFormData);
    const FormDataInfo = useSelector((state : any) => state.FormDataInfo);
    const dispatch = useDispatch();

    const handleSubmit = () => {
        //check if Name, Email and Subject are filled
        if(FormData.Name !== "" &&
            FormData.Email !== "" &&
            FormData.Subject !== ""){
            console.log(24);
            // dispatch();

        }else{
            console.log(23);
        }
    }

    return(
        <div className={`
        bg-blue-500 text-white 
        rounded-md mt-4 cursor-pointer select-none
        active:scale-95 transition-all duration-500
        pl-8 pr-8
        pt-4 pb-4
        `}
        onClick={handleSubmit}
        >
            Absenden
        </div>
    )
}

// ${isInvalid ? "error-shake" : ""}
