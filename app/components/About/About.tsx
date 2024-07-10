import "../.././assets/styles/components/About/About.scss";

import Onur from "../../assets/Images/Onur_Transparent.png";
import Laptop from "../../assets/Images/Laptop.png";
import Image from "next/image";

interface AboutProps {

}
export const About = ({}:AboutProps) =>{
    return(
        <section id={"ÜberMich"} className="About">

                <div className="About_Content">
                    <div className="About_Headline">
                        Über Mich
                    </div>

                    <div className="About_Description">
                            Ich bin Onur Zengin und Fullstack Web Entwickler aus Darmstadt.
                            <br/>
                            Mein Ziel ist es ihnen bei ihrem Website Projekt nach ihren
                            vorstellungen kostengünstig umzusetzen
                            und sie langfristig bei ihrem Internet Auftritt zu Unterstützen.
                            Sei es von Wartung eines bestehenden Projektes bis dem Aufbau einer neuen Website.
                    </div>
                </div>

                <div className="About_Image_Container">
                        <div className="About_ImageBG"></div>
                    <div className="About_Image">
                    </div>
                    {/* <Image draggable={false} className="About_Image" src={Onur} alt="Ein älteres Bild von mir, ihr Browser Unterstützt leider kein HTML5 Image-Tag"/>
                    <Image draggable={false} className="About_Image_Laptop" src={Laptop} alt="Ein älteres Bild von einem Laptop, ihr Browser Unterstützt leider kein HTML5 Image-Tag"/> */}
                </div>
        </section>
)
}

{/* <a href="https://www.flaticon.com/free-icons/laptop" title="laptop icons">Laptop icons created by Vectors Market - Flaticon</a> */}