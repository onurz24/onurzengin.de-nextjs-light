/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import "../.././assets/styles/components/Services/Card.scss";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { InView } from 'react-intersection-observer';

interface Card_Interface{
    BG_Image : any,
    Headline : string,
}

export const Card = ({BG_Image,Headline}:Card_Interface) => {


const [IsVisible,setIsVisible] = useState<boolean>(false);


return (
    <InView as="div"
        threshold={.5}
        className={`Card
        transition-all duration-500
        ${IsVisible ? "translate-y-0 " : "translate-y-8"}
        `}
        onChange={
            (inView, entry) => { if(inView){setIsVisible(inView)}}
        }>

            <div className="Card_Blub"></div>

            {BG_Image != null ?
            <div className="Card_BG_Image">
                <Image src={BG_Image} alt="" />
            </div> : ""
        }

            <div className="Card_Headline">
                {Headline}
            </div>

            <div className="Card_Btn_Container">
                <div className="Card_LearnMore_Btn">
                    Mehr Erfahren
                </div>
            </div>
    </InView>
);};