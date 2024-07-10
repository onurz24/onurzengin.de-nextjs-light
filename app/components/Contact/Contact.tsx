import "../.././assets/styles/components/Contact/Contact.scss";
import { ContactForm } from "./ContactForm";
import { ContactInfobox } from "./ContactInfobox";
import { ContactSubmit } from "./ContactSubmit";
interface ContactProps{};


{/* <video src="./Videos/test2.mp4" className="absolute top-0 left-0 w-full h-full object-cover -z-10 bg-black"
autoPlay muted loop
/> */}

export const Contact = ({} : ContactProps) => {

    return (
    <section id={"Kontakt"} className="Contact relative">



        <div className="Contact_Headline">
            Kontaktiere Mich
        </div>

        <div className="Contact_Description">
            Vielen Dank für Ihr Interesse an meinen Dienstleistungen! Ich freue mich darauf, Ihnen weiterzuhelfen. Egal, ob Sie Fragen haben, Unterstützung benötigen oder einfach mehr über meine Angebote erfahren möchten, zögern Sie nicht, mich zu kontaktieren.
            Bitte füllen Sie das Formular unten aus und geben Sie mir so viele Details wie möglich zu Ihrem Anliegen. Ich werde mich so schnell wie möglich bei Ihnen melden.
        </div>

        <div className="Contact_Form_Container">
            <ContactForm/>
            <ContactInfobox/>
            <ContactSubmit/>
        </div>
    </section>
);};

