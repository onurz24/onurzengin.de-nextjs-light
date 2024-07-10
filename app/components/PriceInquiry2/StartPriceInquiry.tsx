import Link from 'next/link'
import React from 'react'
import '../../assets/styles/components/PriceInquiry/PriceInquiry.scss';

export const StartPriceInquiry = () => {
  return (


    <div id='PriceInquiry' className="PriceInquiry">
    <div className="PriceInquiry_Headline">
        Preis ermitteln lassen
    </div>
    <div className="PriceInquiry_Description">
        Füllen Sie das Formular unten aus, um einen Kostenvoranschlag für Ihre individuelle Website zu erhalten.
        <br/>Geben Sie mir bitte einige Details zu Ihren Anforderungen, damit ich Ihnen ein maßgeschneidertes Angebot erstellen kann.
    </div>

    <div className="PriceInquiry_Form">
    <div className="Step BlurBG">

<span className='content z-20'>
    <div className="mb-4">
        <button className={`bg-blue-500 text-white py-2 px-4 rounded`}
           >
                <Link href="/Preisanfrage">Jetzt Starten</Link>
        </button>
    </div>
</span>
</div>
    </div>
</div>

  )
}

