"use client";
import Link from "next/link";
import "../../assets/styles/components/PriceInquiry/PriceInquiry.scss";
import { useState } from "react";
import Image from "next/image";
import PriceInquiryImage from "../../assets/Images/inquiry.jpg";
import { FaNetworkWired } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { FaTachographDigital } from "react-icons/fa6";
import { GiWireframeGlobe } from "react-icons/gi";
export const PriceInquiry = () => {
  return (
    <div id="PriceInquiry" className="PriceInquiry pt-4 pb-10">
      <div className="PriceInquiry_Headline">Preis ermitteln lassen</div>
      <div className="PriceInquiry_Description">
        Klicken Sie unten auf den Button, um ganz einfach mit dem Preisrechner einen Kostenvoranschlag für Ihre
        individuelle Website zu erhalten.
        <br />
        Geben Sie mir bitte einige Details zu Ihren Anforderungen, damit ich
        Ihnen ein maßgeschneidertes Angebot erstellen kann.
      </div>

      <div className="PriceInquiry_Container">
        <div className="PriceInquiry_Box flex flex-col items-center justify-center">
          <Image
            width={0}
            height={0}
            id="TestImage"
            src={PriceInquiryImage}
            priority={false}
            alt="Placeholder Image"
          />
        </div>

            <div className="PriceInquiry_Box flex flex-col items-center">

                <div className="PriceInquiry_Box flex flex-col items-start 
                bg-gray-200 text-black p-8 rounded-md w-full rounded-br-3xl rounded-tl-3xl">
                    <div className='flex flex-row justify-center items-center gap-2
                    align-bottom
                    '>
                        <FaNetworkWired/>
                        <span>
                          Bequem online von zuhause zu jeder Zeit anfragen
                        </span>
                    </div>
                    <div className='flex flex-row justify-center items-center gap-2'>
                        <GrContact/>
                        <span>
                          Unverbindlich und kostenlos Angebote erhalten
                        </span>
                    </div>
                    <div className='flex flex-row justify-center items-center gap-2'>
                        <FaTachographDigital/>
                        <span>
                          Schnelle Rückmeldungen auf Ihre Anfragen erhalten
                        </span>
                    </div>
                    <div className='flex flex-row justify-center items-center gap-2'>
                        <GiWireframeGlobe/>
                        <span>
                          Realistische Einschätzungen für Ihre Projekte
                        </span>
                    </div>
                </div>
        
                <div className="PriceInquiry_Box flex flex-col w-full">
                  <Link
                    href="/Kostenvoranschlag"
                    className="bg-blue-500 text-white p-4
                    rounded-md mt-4 cursor-pointer select-none
                    active:scale-95 transition-all duration-500"
                    >
                    Kostenvoranschlag anfordern
                  </Link>
                  <Link
                    href="/Preisanfrage"
                    className="bg-gray-200 text-black p-4
                    rounded-md mt-4 cursor-pointer select-none
                    active:scale-95 transition-all duration-500
                    "
                    >
                    Jetzt Starten
                  </Link>
                </div>
                
            </div>
      </div>
    </div>
  );
};
