'use client';
import { FaInfoCircle } from "react-icons/fa"
import { MdWarning } from "react-icons/md"
import { useSelector } from "react-redux"


export const ContactInfobox = () => {

    const ContactFormInfo = useSelector((state : any) => state.ContactFormInfo);

    return(
        <div className={`p-4 text-black
        flex flex-row justify-center items-center gap-1
        max-md:flex-col
        `}>
            <div className="flex flex-col justify-center items-center">
                {/* <FaInfoCircle/>
                <MdWarning/> */}
                {ContactFormInfo.Icon}
            </div>
            <div>
                {ContactFormInfo.Text}
            </div>
        </div>
    )
}