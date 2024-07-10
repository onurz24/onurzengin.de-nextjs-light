import "../.././assets/styles/components/Services/Services.scss";

import { Card } from './Card';

import Service_1 from "../../assets/Images/Service_1.png";
import Service_2 from "../../assets/Images/Service_2.png";
import Service_3 from "../../assets/Images/Service_3.png";
// import Link from "next/link";

interface ServicesProps {}

export const Services = ({} : ServicesProps) => {

    return (
    <section id={"Dienstleistungen"} className="Services">

        <div className="Services_Headline">
            Dienstleistungen
        </div>

        <div className="Services_Description">
        Website können entweder von Grund auf mit Programmiersprachen, Bibliotheken und Frameworks oder mit einem Content-Management-Systen (CMS) erstellt werden.
        Beide Optionen haben Vor- und Nachteile. Die Entwicklung einer maßgeschneiderten Website benötigt umfangreiche Programmierkenntnisse und Zeit.
        {/* CMS wie WordPress und Joomla sind einfach zu installieren und zu verwenden, bieten viele Vorlagen und Plugins und können schnell eine Website erstellen. Allerdings sind sie weniger flexibel und können ältere Sicherheitsprobleme verursachen, wenn sie nicht regelmäßig aktualisiert werden. Die Wahl zwischen diesen beiden Optionen sollte abhängig von den Ressourcen und spezifischen Anforderungen der Website erfolgen. */}
        </div>

        <div className="Services_Container">
            <Card Headline='E-Commerce & CMS' BG_Image={Service_1}/>
            <Card Headline=" Website & Webapplikation" BG_Image={Service_2}/>
            <Card Headline='Online Marketing & SEO' BG_Image={Service_3}/>
        </div>

        {/* <Link href={"/Services"} className="
            text-center text-white mt-12
            border-2 border-white p-2 text-sm">
            Alle Leistungen im Überblick
        </Link> */}
    </section>
);};

