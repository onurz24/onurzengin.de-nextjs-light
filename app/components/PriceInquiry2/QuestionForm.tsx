// /* /app/components/QueryForms/QueryForms.tsx */
"use client";
import React, { useState, ChangeEvent,useEffect } from 'react';
import '../../assets/styles/components/PriceInquiry/PriceInquiry.scss';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export const QueryForms: React.FC = () => {
    const [currentForm, setCurrentForm] = useState<number>(2);
    const [formData, setFormData] = useState<any>({});

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const renderFormStep = () => {
        switch (currentForm) {
            case 1:
                return (
                    <div id='Preisanfrage' className="QueryForm select-none">
                        <label className="flex flex-col">
                        <div className='text-xl'>
                            Haben Sie bereits eine Website?
                        </div>
                            <div className='p-4 flex flex-row items-center justify-center gap-4'>
                
                                <div className='flex flex-row items-center justify-center gap-2'>
 
                                    <div
                                        className={`cursor-pointer  text-white rounded-lg p-2 ${
                                            formData.existingWebsite === 'yes' ? 'bg-blue-500 ' : 'bg-blue-400'
                                        }`}
                                        onClick={() => setFormData({ ...formData, existingWebsite: 'yes' })}
                                    >
                                        Ja
                                    </div>
                                </div>
                                {/* hover:bg-gray-200 */}
                
                                <div className='flex flex-row items-center justify-center gap-2'>
                                    <div
                                        className={`cursor-pointer  text-white rounded-lg p-2 ${
                                            formData.existingWebsite === 'no' ? 'bg-blue-500 ' : 'bg-blue-400'
                                        }`}
                                        onClick={() => setFormData({ ...formData, existingWebsite: 'no' })}
                                    >
                                        Nein
                                    </div>
                                </div>
                
                            </div>
                        </label>
                        <label className="flex flex-col justify-center items-center">
                            Anmerkungen:
                            <textarea placeholder='Falls vorhanden URL : https://beispiel.de' name="notes" onChange={handleInputChange} className="mt-1 p-2 border rounded" />
                        </label>
                        <button disabled={formData.existingWebsite === 'yes' || formData.existingWebsite === 'no' ? false : true}
                            onClick={() => setCurrentForm(currentForm + 1)}
                            className="cursor-pointer mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600
                            disabled:bg-blue-400
                            "><FaArrowRight/></button>
                    </div>
                );
                
                
            case 2:
                return (
                        <div className="QueryForm ">
                            <label className="flex flex-col justify-center items-center gap-4">
                                <div className='text-xl'>
                                    Wählen Sie Ihre Branche:
                                </div>

                                <div className="grid grid-cols-3 gap-4">
                                    <label className={`flex flex-col justify-center items-center p-4 rounded-lg text-white cursor-pointer
                                        ${formData.industry === 'gastronomy' ? 'bg-blue-500' : 'bg-blue-400'}`}>
                                        <input type="radio" name="industry"
                                            value="gastronomy" onChange={handleInputChange}
                                            className="w-full h-full hidden"/>
                                        <div>
                                            Gastronomie und Lebensmittel
                                        </div>
                                    </label>
                                    <label className={`flex flex-col justify-center items-center p-4 rounded-lg text-white cursor-pointer
                                        ${formData.industry === 'retail' ? 'bg-blue-500' : 'bg-blue-400'}`}>
                                        <input type="radio" name="industry"
                                            value="retail" onChange={handleInputChange}
                                            className="w-full h-full hidden"/>
                                        <div>
                                            Einzelhandel
                                        </div>
                                    </label>
                                    <label className={`flex flex-col justify-center items-center p-4 rounded-lg text-white cursor-pointer
                                        ${formData.industry === 'services' ? 'bg-blue-500' : 'bg-blue-400'}`}>
                                        <input type="radio" name="industry"
                                            value="services" onChange={handleInputChange}
                                            className="w-full h-full hidden"/>
                                        <div>
                                            Dienstleistungen
                                        </div>
                                    </label>
                                    <label className={`flex flex-col justify-center items-center p-4 rounded-lg text-white cursor-pointer
                                        ${formData.industry === 'craftsmanship' ? 'bg-blue-500' : 'bg-blue-400'}`}>
                                        <input type="radio" name="industry"
                                            value="craftsmanship" onChange={handleInputChange}
                                            className="w-full h-full hidden"/>
                                        <div>
                                            Handwerksbetriebe
                                        </div>
                                    </label>
                                    <label className={`flex flex-col justify-center items-center p-4 rounded-lg text-white cursor-pointer
                                        ${formData.industry === 'real_estate' ? 'bg-blue-500' : 'bg-blue-400'}`}>
                                        <input type="radio" name="industry"
                                            value="real_estate" onChange={handleInputChange}
                                            className="w-full h-full hidden"/>
                                        <div>
                                            Immobilien
                                        </div>
                                    </label>
                                    <label className={`flex flex-col justify-center items-center p-4 rounded-lg text-white cursor-pointer
                                        ${formData.industry === 'other' ? 'bg-blue-500' : 'bg-blue-400'}`}>
                                        <input type="radio" name="industry"
                                            value="other" onChange={handleInputChange}
                                            className="w-full h-full hidden"/>
                                        <div>
                                            Andere
                                        </div>
                                    </label>
                                </div>
                            </label>

                            <div className='flex flex-row justify-center items-center p-6 gap-6'>

                                <label className="flex flex-col justify-center items-center gap-4 ">
                                    Beschreiben Sie Ihr Unternehmen:
                                    <textarea name="companyDescription" onChange={handleInputChange} className="mt-1 p-2 border rounded" />
                                </label>

                                <label className="flex flex-col justify-center items-center gap-4">
                                    Sonstige Anmerkungen:
                                    <textarea name="comments" onChange={handleInputChange} className="mt-1 p-2 border rounded" />
                                </label>

                            </div>
                            <div className='flex flex-row justify-center items-center gap-2'>
                                <button onClick={() => setCurrentForm(currentForm - 1)}
                                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                    <FaArrowLeft/>
                                </button>
                                <button onClick={() => setCurrentForm(currentForm + 1)}
                                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                    <FaArrowRight/>
                                </button>
                            </div>
                        </div>
                );
            case 3:
                return (
                    <div className="QueryForm">
                        <label className="flex flex-col items-center justify-center">
                            <div>
                                Haben Sie ein festes Budget?
                            </div>
                            <div className='flex flex-row justify-center items-center gap-2'>

                                <label className={`flex flex-col justify-center items-center cursor-pointer
                                    text-white rounded-lg p-2
                                    ${formData.budget === 'yes' ? 'bg-blue-500' : 'bg-blue-400'}`}>
                                    <input type="radio" name="budget"
                                        value="yes" onChange={handleInputChange}
                                        className="w-full h-full hidden" />
                                    <div>
                                        Ja
                                    </div>
                                </label>
                                <label className={`flex flex-col justify-center items-center cursor-pointer
                                    text-white rounded-lg p-2
                                    ${formData.budget === 'no' ? 'bg-blue-500' : 'bg-blue-400'}`}>
                                    <input type="radio" name="budget"
                                        value="no" onChange={handleInputChange}
                                        className="w-full h-full hidden" />
                                    <div>
                                        Nein
                                    </div>
                                </label>
                            </div>
                        </label>
                
                        {(formData.budget === "yes" || formData.budget === "no") && (
                            <label className="flex flex-col items-center justify-center">
                                <div>
                                    {formData.budget === "yes" ? "Budgetbetrag:" : "Budgetvorstellungen"}
                                </div>
                                <input
                                    type="range"
                                    name="budgetAmount"
                                    min="0"
                                    max="2000" // maximale Grenze auf 2000€ festlegen
                                    step="10" // in 10€ Schritten
                                    value={formData.budgetAmount} // Budget-Wert anzeigen
                                    onChange={handleInputChange}
                                    className="mt-1 p-2 border rounded"
                                />
                                <div>
                                    {formData.budgetAmount}€
                                </div>
                            </label>
                        )}
                
                        <label className="flex flex-col justify-center items-center">
                            <div>
                                Gewünschter Zeitrahmen (von - bis):
                            </div>
                            <div className='flex flex-row items-center justify-center gap-2'>
                                <input type="date" name="timeframeStart" onChange={handleInputChange} className="text-black mt-1 p-2 border rounded" />
                                <span>-</span>
                                <input type="date" name="timeframeEnd" onChange={handleInputChange} className="text-black mt-1 p-2 border rounded" />
                            </div>
                        </label>
                
                        <div className='flex flex-row justify-center items-center gap-2'>
                            <button onClick={() => setCurrentForm(currentForm - 1)}
                                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                <FaArrowLeft />
                            </button>
                            <button onClick={() => setCurrentForm(currentForm + 1)}
                                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                );
                
                
            // Weitere Cases für weitere Steps (4, 5, 6, 7) hinzufügen
            default:
                return null;
        }
    };

    return (
        <div id='QueryForms' className="QueryForms">
            <div className="QueryForms_Headline">
                Preis ermitteln lassen
            </div>
            <div className="QueryForms_Description">
                Füllen Sie das Formular unten aus, um einen Kostenvoranschlag für Ihre individuelle Website zu erhalten. Geben Sie uns bitte einige Details zu Ihren Anforderungen, damit wir Ihnen ein maßgeschneidertes Angebot machen können.
            </div>

            {renderFormStep()}
        </div>
    );
};
