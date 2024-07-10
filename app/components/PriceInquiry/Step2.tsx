import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface Step2Props {
    industry: string;
    setIndustry: React.Dispatch<React.SetStateAction<string>>;
    description: string;
    setDescription: React.Dispatch<React.SetStateAction<string>>;
    step : number;
    setStep : (step: number) => void;
}

export const Step2: React.FC<Step2Props> = ({ step,setStep,industry, setIndustry, description, setDescription }) => {
    const handleSelectIndustry = (value: string) => {
        setIndustry(value);
    };

    return (
        <div className="Step">
            <h2 className="Step_Title text-lg font-bold mb-4">Wählen Sie Ihre Branche</h2>
            <div className="Step_Content
                ">
                <label className={`Step_Label
                    ${industry === "Gastronomie" ? "bg-blue-500 text-white rounded-md":""}`}>

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
                    ${industry === "Einzelhandel" ? "bg-blue-500 text-white rounded-md":""}`}>

                    <input type="radio" name="industry"
                        value="Einzelhandel" className="mr-2 absolute w-full h-full hidden"
                        onChange={() => handleSelectIndustry("Einzelhandel")} />
                    <Image
                        className={`select-none`}
                        draggable={false} src={"/Icons/shop.png"}
                        width={150} height={150} alt="Restaurant"/>
                    <span className='select-none'>
                        Einzelhandel
                    </span>
                </label>
                <label className={`Step_Label
                    ${industry === "Dienstleistungen" ? "bg-blue-500 text-white rounded-md":""}`}>

                    <input type="radio" name="industry" value="Dienstleistungen"
                        className="mr-2 absolute w-full h-full hidden"
                        onChange={() => handleSelectIndustry("Dienstleistungen")} />

                    <Image
                        className={`select-none`}
                        draggable={false} src={"/Icons/information.png"}
                        width={150} height={150} alt="Restaurant"/>
                    <span className='select-none'>
                        Dienstleistungen
                    </span>
                </label>
                <label className={`Step_Label
                    ${industry === "Handwerksbetriebe" ? "bg-blue-500 text-white rounded-md":""}`}>
                    <input type="radio" name="industry" value="Handwerksbetriebe"
                        className="mr-2 absolute w-full h-full hidden"
                        onChange={() => handleSelectIndustry("Handwerksbetriebe")} />
                    <Image
                        className={`select-none`}
                        draggable={false} src={"/Icons/wall.png"}
                        width={150} height={150} alt="Restaurant"/>
                    <span className='select-none'>
                        Handwerksbetriebe
                    </span>

                </label>
                <label className={`Step_Label
                    ${industry === "Immobilien" ? "bg-blue-500 text-white rounded-md":""}`}>
                    <input type="radio" name="industry" value="Immobilien"
                        className="mr-2 absolute w-full h-full hidden"
                        onChange={() => handleSelectIndustry("Immobilien")}/>
                    <Image
                        className={`select-none`}
                        draggable={false} src={"/Icons/deal.png"}
                        width={150} height={150} alt="Restaurant"/>
                    <span className='select-none'>
                        Immobilien
                    </span>
                </label>
                <label className={`Step_Label
                    ${industry === "Sonstiges" ? "bg-blue-500 text-white rounded-md":""}`}>
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

                <button onClick={()=>{setStep(step - 1)}} className="bg-gray-500 text-white py-2 px-4 rounded mr-2">
                    <FaArrowLeft/>
                </button>
                <button onClick={()=>{setStep(step + 1)}} className="bg-blue-500 text-white py-2 px-4 rounded mr-2">
                    <FaArrowRight/>
                </button>
            </div>
        </div>
    );
};