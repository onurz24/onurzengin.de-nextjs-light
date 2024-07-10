// /* /app/components/Techstack/Techstack.tsx */

"use client"
import React, { useEffect, useState } from 'react';
import { SkillsList } from './SkillsList'; // Stelle sicher, dass der Pfad korrekt ist
import '../../assets/styles/components/Techstack/Techstack2.scss';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export const Techstack = () => {
    const [itemsPerPage, setItemsPerPage] = useState(9);
  const totalPages = Math.ceil(SkillsList.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    // Dynamische Anpassung der itemsPerPage basierend auf Bildschirmbreite
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
        // Mobil
        setItemsPerPage(3);
      } else if (screenWidth < 1200) {
        // Tablet
        setItemsPerPage(6);
      } else {
        // Desktop
        setItemsPerPage(9);
      }
    };

    // Füge den Event Listener für das Resize-Ereignis hinzu
    window.addEventListener('resize', handleResize);

    // Rufe handleResize einmalig auf, um die initiale Anpassung vorzunehmen
    handleResize();

    // Entferne den Event Listener, wenn die Komponente unmontiert wird
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePageChange = (newPage : any) => {
    setCurrentPage(newPage);
  };

  const renderSkills = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentSkills = SkillsList.slice(startIndex, endIndex);

    return currentSkills.map((skill, index) => (
      <div className="Skill" key={index}>
        {skill.icon}
        <div className="Skill_Title">{skill.title}</div>
        <div className="Skill_Description">{skill.description}</div>
      </div>
    ));
  };

  return (
    <section className="Techstack">
      <div className="Techstack_Headline">Meine Technologien</div>
      <div className="Techstack_Description">
        Website können entweder von Grund auf mit Programmiersprachen, Bibliotheken und Frameworks oder mit einem
        Content-Management-Systen (CMS) erstellt werden.
        Beide Optionen haben Vor- und Nachteile. Die Entwicklung einer
        maßgeschneiderten Website benötigt umfangreiche Programmierkenntnisse und Zeit.
      </div>
      <div className="Skills_Container relative">
          {renderSkills()}
        </div>
      <div className="Pagination_Container">
        {[...Array(totalPages)].map((_, index) => (
          <div
            key={index}
            className={`Pagination_Dot ${index + 1 === currentPage ? 'active' : ''}`}
            onClick={() => handlePageChange(index + 1)}
          />
        ))}
      </div>
    </section>
  );
};



  // return (
  //   <section className="Techstack">
  //     <div className="Techstack_Headline">Meine Technologien</div>
  //     <div className="Techstack_Description">
  //       Website können entweder von Grund auf mit Programmiersprachen, Bibliotheken und Frameworks oder mit einem
  //       Content-Management-Systen (CMS) erstellt werden.
  //       Beide Optionen haben Vor- und Nachteile. Die Entwicklung einer
  //       maßgeschneiderten Website benötigt umfangreiche Programmierkenntnisse und Zeit.
  //     </div>
  //     <div className="Skills_Container relative">
  //         {renderSkills()}
  //       </div>
  //     <div className="Pagination_Container">
  //       {[...Array(totalPages)].map((_, index) => (
  //         <div
  //           key={index}
  //           className={`Pagination_Dot ${index + 1 === currentPage ? 'active' : ''}`}
  //           onClick={() => handlePageChange(index + 1)}
  //         />
  //       ))}
  //     </div>
  //   </section>
  // );