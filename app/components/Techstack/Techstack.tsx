// /* /app/components/Techstack/Techstack.tsx */
import '../../assets/styles/components/Techstack/Techstack.scss';
import { FaReact } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';

export const Techstack = () => {

return (
    <section className="Techstack">
        <div className="Techstack_Headline">Meine Technologien</div>
            <div className="Techstack_Description">
                Website können entweder von Grund auf mit Programmiersprachen, Bibliotheken und Frameworks oder mit einem
                Content-Management-Systen (CMS) erstellt werden.
                Beide Optionen haben Vor- und Nachteile. Die Entwicklung einer
                maßgeschneiderten Website benötigt umfangreiche Programmierkenntnisse und Zeit.
            </div>
        <div className="Skills_Container">
            <div className="Skill p-4 bg-white text-black text-xl">
                <div>
                    Frontend Development
                </div>
                <div className='Skill_Tags flex gap-1 w-[500px]'>
                    <div className="Skill_Tag flex items-center justify-center
                        border-2 border-teal-500 w-fit p-2 text-sm
                        text-white bg-black rounded-md cursor-pointer
                        ">
                        <FaReact/> React
                    </div>
                    <div className="Skill_Tag flex items-center justify-center
                        border-2 border-teal-500 w-fit p-2 text-sm
                        text-white bg-black rounded-md cursor-pointer
                        ">
                        <SiNextdotjs/> Next.js
                    </div>
                    <div className="Skill_Tag flex items-center justify-center
                        border-2 border-teal-500 w-fit p-2 text-sm
                        text-white bg-black rounded-md cursor-pointer
                        ">
                        <FaReact/> React
                    </div>
                    <div className="Skill_Tag flex items-center justify-center
                        border-2 border-teal-500 w-fit p-2 text-sm
                        text-white bg-black rounded-md cursor-pointer
                        ">
                        <FaReact/> React
                    </div>
                    <div className="Skill_Tag flex items-center justify-center
                        border-2 border-teal-500 w-fit p-2 text-sm
                        text-white bg-black rounded-md cursor-pointer
                        ">
                        <FaReact/> React
                    </div>
 
                </div>
                
            </div>
        </div>
    </section>
);};



