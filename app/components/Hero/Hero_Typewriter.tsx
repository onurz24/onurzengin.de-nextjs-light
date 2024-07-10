"use client"
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

export const Hero_Typewriter = () => {
    const [jsEnabled, setJsEnabled] = useState(false);

    useEffect(() => {
        setJsEnabled(true);
    }, []);

    const handleType = (count: number) => {
            // access word count number
            console.log(count);
        };
        const handleDone = () => {
            console.log(`Done after 5 loops!`);
        };
    return(
        <>
            {jsEnabled ?
            <Typewriter
            words={[
                "<OZ Web-Entwicklung/>",
                "<Webseiten gestalten/>",
                "<Präsenz aufbauen/>",
            ]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
            />
        : "<OZ Web-Entwicklung/>"
        }
        </>
    )
}