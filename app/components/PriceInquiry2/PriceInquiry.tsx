"use client"
import Image from 'next/image';
// /* /app/components/PriceInquiry/PriceInquiry.tsx */
import '../../assets/styles/components/PriceInquiry/PriceInquiry.scss';
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export const PriceInquiry: React.FC = () => {
    const [step, setStep] = useState(1);
    const [hasWebsite, setHasWebsite] = useState<boolean | null>(null);
    const [industry, setIndustry] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [hasBudget, setHasBudget] = useState<boolean | null>(null);
    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");


    const handleNext = () => {
        setStep(step + 1);
    };
    const handlePrevious = () => {
        setStep(step - 1);
    };
    const handleStep1Next = () => {
        if (hasWebsite !== null) {
            handleNext();
        }
    };
    const handleStep2Next = () => {
        if (industry !== "") {
            handleNext();
        }
    };
    const handleStep3Next = () => {
        if (hasBudget !== null) {
            handleNext();
        }
    };

    return (
        <div id='PriceInquiry' className="PriceInquiry h-full">
            <div className="PriceInquiry_Headline">
                Preis ermitteln lassen
            </div>
            <div className="PriceInquiry_Description">
                Füllen Sie das Formular unten aus, um einen Kostenvoranschlag für Ihre individuelle Website zu erhalten.
                <br/>Geben Sie mir bitte einige Details zu Ihren Anforderungen, damit ich Ihnen ein maßgeschneidertes Angebot erstellen kann.
            </div>

            <div className="PriceInquiry_Form">
                {step === 1 && (
                    <Step1 hasWebsite={hasWebsite} setHasWebsite={setHasWebsite} handleNext={handleStep1Next} />
                )}
                {step === 2 && (
                    <Step2 industry={industry} setIndustry={setIndustry} description={description} setDescription={setDescription} handleNext={handleStep2Next} handlePrevious={handlePrevious} />
                )}
                {step === 3 && (
                    <Step3 hasBudget={hasBudget} setHasBudget={setHasBudget} startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} handleNext={handleStep3Next} handlePrevious={handlePrevious} />
                )}
            </div>
        </div>
    );
};



interface Step1Props {
    hasWebsite: boolean | null;
    setHasWebsite: React.Dispatch<React.SetStateAction<boolean | null>>;
    handleNext: () => void;
}

const Step1: React.FC<Step1Props> = ({ hasWebsite, setHasWebsite, handleNext }) => {
    const handleSelectWebsite = (value: boolean) => {
        setHasWebsite(value);
    };

    return (
        <div className="Step">

            <span className=''>
                <h2 className="text-lg font-bold mb-4">Haben Sie bereits eine Website?</h2>
                <div className="mb-4">
                    <button className={`bg-blue-500 text-white py-2 px-4 mr-4 rounded ${hasWebsite === true ? "bg-blue-700" : ""}`} onClick={() => handleSelectWebsite(true)}>Ja</button>
                    <button className={`bg-blue-500 text-white py-2 px-4 rounded ${hasWebsite === false ? "bg-blue-700" : ""}`} onClick={() => handleSelectWebsite(false)}>Nein</button>
                </div>
            </span>

            {/* {hasWebsite === true ?} ) : */}
            <div className="flex flex-col justify-center items-center">
                <textarea
                    className="border rounded w-full p-2 text-black"
                    placeholder="Anmerkungen oder URL's"/>

                <div className='flex flex-row items-center justify-center gap-2 mt-2'>
                    <button
                        className={`mt-4 bg-gray-500 opacity-50 text-white py-2 px-4 rounded float-right
                        `}
                        disabled={hasWebsite === null}>
                            <FaArrowLeft/>
                    </button>
                    <button onClick={handleNext}
                        className={`mt-4 bg-blue-500 text-white py-2 px-4 rounded float-right
                        ${hasWebsite === null ? "cursor-not-allowed opacity-50" : ""}
                        `}
                        disabled={hasWebsite === null}>
                            <FaArrowRight/>
                    </button>
                </div>
            </div>

        </div>
    );
};

interface Step2Props {
    industry: string;
    setIndustry: React.Dispatch<React.SetStateAction<string>>;
    description: string;
    setDescription: React.Dispatch<React.SetStateAction<string>>;
    handleNext: () => void;
    handlePrevious: () => void;
}

const Step2: React.FC<Step2Props> = ({ industry, setIndustry, description, setDescription, handleNext, handlePrevious }) => {
    const handleSelectIndustry = (value: string) => {
        setIndustry(value);
    };

    return (
        <div className="Step">
            <h2 className="Step_Title text-lg font-bold mb-4">Wählen Sie Ihre Branche</h2>
            <div className="Step_Content
                ">
                <label className={`Step_Label
                    ${industry === "Gastronomie" ? "bg-blue-500 rounded-md":""}`}>

                    <input type="radio" name="industry" value="Gastronomie"
                        className="mr-2 absolute w-full h-full hidden"
                        onChange={() => handleSelectIndustry("Gastronomie")}
                        />

                    <Image
                        className={`select-none`}
                        draggable={false} src={"/Icons/restaurant.png"}
                        width={150} height={150} alt="Restaurant"/>

                    <span className='select-none'>
                        Gastronomie
                    </span>
                </label>
                <label className={`Step_Label
                    ${industry === "Einzelhandel" ? "bg-blue-500 rounded-md":""}`}>

                    <input type="radio" name="industry"
                        value="Einzelhandel" className="mr-2 absolute w-full h-full hidden"
                        onChange={() => handleSelectIndustry("Einzelhandel")} />
                    <Image
                        className='select-none'
                        draggable={false} src={"/Icons/shop.png"}
                        width={150} height={150} alt="Restaurant"/>
                    <span className='select-none'>
                        Einzelhandel
                    </span>
                </label>
                <label className={`Step_Label
                    ${industry === "Dienstleistungen" ? "bg-blue-500 rounded-md":""}`}>

                    <input type="radio" name="industry" value="Dienstleistungen"
                        className="mr-2 absolute w-full h-full hidden"
                        onChange={() => handleSelectIndustry("Dienstleistungen")} />

                    <Image
                        className='select-none'
                        draggable={false} src={"/Icons/information.png"}
                        width={150} height={150} alt="Restaurant"/>
                    <span className='select-none'>
                        Dienstleistungen
                    </span>
                </label>
                <label className={`Step_Label
                    ${industry === "Handwerksbetriebe" ? "bg-blue-500 rounded-md":""}`}>
                    <input type="radio" name="industry" value="Handwerksbetriebe"
                        className="mr-2 absolute w-full h-full hidden"
                        onChange={() => handleSelectIndustry("Handwerksbetriebe")} />

                    <Image
                        className='select-none'
                        draggable={false} src={"/Icons/wall.png"}
                        width={150} height={150} alt="Restaurant"/>
                    <span className='select-none'>
                        Handwerksbetriebe
                    </span>

                </label>
                <label className={`Step_Label
                    ${industry === "Immobilien" ? "bg-blue-500 rounded-md":""}`}>
                    <input type="radio" name="industry" value="Immobilien"
                        className="mr-2 absolute w-full h-full hidden"
                        onChange={() => handleSelectIndustry("Immobilien")}/>
                    <Image
                        className='select-none'
                        draggable={false} src={"/Icons/deal.png"}
                        width={150} height={150} alt="Restaurant"/>
                    <span className='select-none'>
                        Immobilien
                    </span>
                </label>
                <label className={`Step_Label
                    ${industry === "Sonstiges" ? "bg-blue-500 rounded-md":""}`}>
                    <input type="radio" name="industry" value="Sonstiges"
                        className="mr-2 absolute w-full h-full hidden"
                        onChange={() => handleSelectIndustry("Sonstiges")} />
                    <Image
                        className='select-none scale-90'
                        draggable={false} src={"/Icons/hand.png"}
                        width={150} height={150} alt="Restaurant"/>
                    <span className='select-none'>
                        Sonstiges
                    </span>
                </label>
            </div>
            <div className="mb-4 w-1/2 max-lg:w-full">
                <textarea
                    className="border rounded w-full p-2 text-black"
                    placeholder="Beschreiben Sie Ihr Unternehmen"
                    onChange={(e) => setDescription(e.target.value)}>
                </textarea>
            </div>
            <div className='mt-2'>

                <button onClick={handlePrevious} className="bg-gray-500 text-white py-2 px-4 rounded mr-2">
                    <FaArrowLeft />
                </button>
                <button onClick={handleNext} className="bg-blue-500 text-white py-2 px-4 rounded">
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

interface Step3Props {
    hasBudget: boolean | null;
    setHasBudget: React.Dispatch<React.SetStateAction<boolean | null>>;
    startDate: string;
    setStartDate: React.Dispatch<React.SetStateAction<string>>;
    endDate: string;
    setEndDate: React.Dispatch<React.SetStateAction<string>>;
    handleNext: () => void;
    handlePrevious: () => void;
}

const Step3: React.FC<Step3Props> = ({ hasBudget, setHasBudget, startDate, setStartDate, endDate, setEndDate, handleNext, handlePrevious }) => {
    // Zustand für das geschätzte Budget
    const [estimatedBudget, setEstimatedBudget] = useState<number>(200);
    const [BudgetSelection, setBudgetSelection] = useState<boolean>(true);


    return (
        <div className="Step">
            <h2 className="text-lg font-bold mb-4 ">
                Haben Sie ein festes Budget?
            </h2>
            <div className="mb-4">
                {/* Button für "Ja" */}
                <button
                    className={`bg-blue-500 text-white py-2 px-4 mr-4 rounded
                        ${hasBudget === true ? "bg-blue-700" : ""}`}
                    onClick={() => setBudgetSelection(true)}>
                        Ja
                </button>
                {/* Button für "Nein" */}
                <button
                    className={`bg-blue-500 text-white py-2 px-4 rounded
                        ${hasBudget === false ? "bg-blue-700" : ""}`}
                    onClick={() => setBudgetSelection(false)}>
                        Nein
                </button>
            </div>
            {/* Anzeige des Eingabebereichs */}
            <div className="mb-4 mt-4 w-full">

                {/* Anzeige des ausgewählten Budgets */}
                <p>
                    {BudgetSelection ? "Festes Budget: " : "Budgetvorstellungen: "}
                    {estimatedBudget === 1500 ? "1500+" : estimatedBudget} Euro
                </p>
                {/* Input-Range für das geschätzte Budget */}
                <input
                    type="range"
                    className='w-2/4 cursor-grab '
                    min={0}
                    max={1500}
                    step={10}
                    value={estimatedBudget}
                    onChange={(e) => setEstimatedBudget(parseInt(e.target.value))}
                />
            </div>

            <div className="mb-4 w-full flex justify-center items-center max-md:flex flex-col gap-2 ">

                <label className="block mb-2">
                    Geschätzter fertigstellungs Zeitraum:
                </label>

                <span className='w-2/3 flex flex-row items-center justify-center gap-4'>
                    <input
                        type="date"
                        className="w-1/3 border rounded py-2 px-4 mr-2 text-black"
                        onChange={e => setStartDate(e.target.value)}/>
                    <span>
                        bis
                    </span>
                    <input type="date"
                        className="w-1/3 border rounded py-2 px-4 ml-2 mr-2 text-black"
                        onChange={e => setEndDate(e.target.value)}/>
                </span>
            </div>

            <div className='mt-2'>
                <button
                    onClick={handlePrevious}
                    className="bg-gray-500 text-white py-2 px-4 rounded mr-2">
                    <FaArrowLeft/>
                </button>
                <button
                    onClick={handleNext}
                    className="bg-blue-500 text-white py-2 px-4 rounded">
                    <FaArrowRight/>
                </button>
            </div>
        </div>
    );
};

