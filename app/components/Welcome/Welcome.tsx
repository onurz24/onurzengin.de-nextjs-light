import "../.././assets/styles/components/Welcome/Welcome.scss";

interface WelcomeProps {};

export const Welcome = ({} : WelcomeProps) => {
    return(
        <section className="Welcome">
            <div className="Welcome_Headline">
                Herzlich willkommen!
            </div>

            <div className="Welcome_Description">
            Ein Internet Auftritt ist in der heutigen Zeit essentiell
            für Mittelständische Unternehmen & Selbständige sich von der Konkurenz abzuheben,
            jedoch können überteuerte Agenturen bei diesem vorhaben abschrecken.
            Keine Sorge auf meiner Website finden sie alles was sie
            über mich und meine Dienstleistungen wissen müssen.
            Sollten sie Fragen oder anregungen haben zögern sie bitte nicht mich zu kontaktieren
            </div>
    </section>
    )
}

