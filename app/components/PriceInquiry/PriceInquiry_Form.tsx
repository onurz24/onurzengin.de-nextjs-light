"use client";
import '../../assets/styles/components/PriceInquiry/PriceInquiry.scss';

import { useState } from "react"
import { Step1 } from "./Step1"
import { Step2 } from "./Step2"
import { Step3 } from "./Step3"
import { FaArrowLeft } from 'react-icons/fa';
import { BiExit } from 'react-icons/bi';
import Link from 'next/link';



export const PriceInquiry_Form = () => {
    const [step,setStep] = useState<number>(0)
    const [hasWebsite, setHasWebsite] = useState<boolean | null>(null);
    const [industry, setIndustry] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [hasBudget, setHasBudget] = useState<boolean | null>(null);
    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");

    const RenderStep = () => {
        switch (step) {
            case 0:
                return <Step1
                    hasWebsite={hasWebsite}
                    setHasWebsite={setHasWebsite}
                    step={step}
                    setStep={setStep}/>
            case 1:
                return <Step2
                            industry={industry} 
                            setIndustry={setIndustry}
                            description={description}
                            setDescription={setDescription}
                            step={step}
                            setStep={setStep}
                        />
            case 2:
                return <Step3 
                            hasBudget={hasBudget}
                            setHasBudget={setHasBudget}
                            startDate={startDate}
                            setStartDate={setStartDate}
                            endDate={endDate}
                            setEndDate={setEndDate}
                            step={step}
                            setStep={setStep} 
                        />
            default:
                return <Step1
                            hasWebsite={hasWebsite}
                            setHasWebsite={setHasWebsite}
                            step={step}
                            setStep={setStep}
                        />
        }
    }

    return(
        <div className="PriceInquiry_Form">

            <Link 
             href={"/#PriceInquiry"}
             className='absolute right-10 top-10
             flex flex-row justify-content items-center gap-1 text-black'
             title='Zurück zur Startseite'
             >
                <div>Verlassen</div>
                <BiExit className='cursor-pointer' size={24}/>
            </Link>
            {RenderStep()}
        </div>
    )
}