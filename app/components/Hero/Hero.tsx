import "../.././assets/styles/components/Hero/Hero.scss";
import { Hero_Typewriter } from "./Hero_Typewriter";
import Image from "next/image";
import HeroBG from "../../assets/Images/Herobg.png";
import Link from "next/link";

export const Hero = () => {

return(
    <section id={"Start"} className="Hero bg-black bg-opacity-35">

        <Image className="Hero_BG" src={HeroBG} alt="alt"
            width={0} height={0}
            priority
        />
            <div className="Hero_Typewriter ">
                <Hero_Typewriter/>
            </div>

            <div className="Hero_Btn_Container">
                <Link href={"#ÜberMich"} className="Hero_Btn Hero_LearnMore_Btn">
                    Mehr Erfahren
                </Link>
                <Link href={"#Kontakt"} className="Hero_Btn Hero_ContactNow_Btn">
                    Jetzt Kontaktieren
                </Link>
            </div>
    </section>
    )
}