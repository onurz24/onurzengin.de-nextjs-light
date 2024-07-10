import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface Step3Props {
    hasBudget: boolean | null;
    setHasBudget: React.Dispatch<React.SetStateAction<boolean | null>>;
    startDate: string;
    setStartDate: React.Dispatch<React.SetStateAction<string>>;
    endDate: string;
    setEndDate: React.Dispatch<React.SetStateAction<string>>;
    step: number;
    setStep: (step: number) => void;
}

export const Step3: React.FC<Step3Props> = ({
    step,
    setStep,
    hasBudget,
    setHasBudget,
    startDate,
    setStartDate,
    endDate,
    setEndDate
}) => {
    const [estimatedBudget, setEstimatedBudget] = useState<number>(200);
    const [budgetSelection, setBudgetSelection] = useState<boolean>(true);

    const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStartDate(e.target.value);
        if (new Date(e.target.value) > new Date(endDate)) {
            setEndDate("");
        }
    };

    return (
        <div className="Step">
            <h2 className="text-lg font-bold mb-4">
                Haben Sie ein festes Budget?
            </h2>
            <div className="mb-4">
                <button
                    className={`bg-blue-500 text-white py-2 px-4 mr-4 rounded ${hasBudget === true ? "bg-blue-700" : ""}`}
                    onClick={() => setBudgetSelection(true)}
                >
                    Ja
                </button>
                <button
                    className={`bg-blue-500 text-white py-2 px-4 rounded ${hasBudget === false ? "bg-blue-700" : ""}`}
                    onClick={() => setBudgetSelection(false)}
                >
                    Nein
                </button>
            </div>
            <div className="mb-4 mt-4 w-full">
                <p>
                    {budgetSelection ? "Festes Budget: " : "Budgetvorstellungen: "}
                    {estimatedBudget === 1500 ? "1500+" : estimatedBudget} Euro
                </p>
                <input
                    type="range"
                    className="w-2/4 cursor-grab"
                    min={0}
                    max={1500}
                    step={10}
                    value={estimatedBudget}
                    onChange={(e) => setEstimatedBudget(parseInt(e.target.value))}
                />
            </div>
            <div className="mb-4 w-full flex justify-center items-center max-md:flex flex-col gap-2">
                <label className="block mb-2">
                    Geschätzter fertigstellungs Zeitraum:
                </label>
                <span className="w-2/3 flex flex-row items-center justify-center gap-4">
                    <input
                        type="date"
                        className="w-1/3 border rounded py-2 px-4 mr-2 text-black"
                        value={startDate}
                        onChange={handleStartDateChange}
                    />
                    <span>bis</span>
                    <input
                        type="date"
                        className="w-1/3 border rounded py-2 px-4 ml-2 mr-2 text-black"
                        value={endDate}
                        min={startDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </span>
            </div>
            <div className="mt-2">
                <button
                    onClick={() => { setStep(step - 1); }}
                    className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
                >
                    <FaArrowLeft />
                </button>
                <button
                    onClick={() => { setStep(step + 1); }}
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};
