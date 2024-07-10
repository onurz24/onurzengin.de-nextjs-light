'use client';
import { useEffect, useState } from "react";
import "../.././assets/styles/components/ScrollToTop/ScrollToTop.scss";
import { IoArrowUpCircleSharp} from "react-icons/io5";

export const ScrollToTop = () => {

const [ScrollY,setScrollY] = useState<number>(0);


useEffect(() => {
    window.addEventListener("scroll",() => setScrollY(document.documentElement.scrollTop))

    return () => {
        window.addEventListener("scroll",() => setScrollY(document.documentElement.scrollTop))
    }
}, [ScrollY])

    return(

        <div
            onClick={()=>{ScrollY > 100 ?
            window.scrollTo({
                behavior : "smooth",
                left : 0,
                top : 0})
            :
            window.scrollTo({
                behavior : "smooth",
                left : 0,
                top : document.body.scrollHeight});
            }}
        className={`ScrollToTop ${ScrollY > 100 ? " ScrollToTop_Up" : "ScrollToTop_Down"}`}>
                <IoArrowUpCircleSharp/>
        </div>
    )
}