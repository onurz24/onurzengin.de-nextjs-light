import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface Step1Props {
    hasWebsite: boolean | null;
    setHasWebsite: React.Dispatch<React.SetStateAction<boolean | null>>;
    step : number;
    setStep : (step: number) => void;
}

export const Step1: React.FC<Step1Props> = ({ step, setStep,hasWebsite, setHasWebsite }) => {
    
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
                    <button onClick={()=>{setStep(step + 1)}}
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