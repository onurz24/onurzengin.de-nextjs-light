/* /app/components/Techstack/Skills.tsx */

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaSass,
    FaReact,
    FaNodeJs,
    FaPhp,
    FaWordpress,
    FaGithub,
    FaGit,
    FaLinux,
  } from 'react-icons/fa';
  import {
    SiTypescript,
    SiTailwindcss,
    SiNextdotjs,
    SiRedux,
    SiMysql,
    SiJquery,
    SiVisualstudiocode,
    SiVercel,
    SiGooglesearchconsole,
  } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

// ...

export const SkillsList = [

    {
        icon: <FaJs size={32} style={{ color: '#F0DB4F' }} />,
        title: 'JavaScript',
        description: 'Die Programmiersprache für interaktive Webseiten und Webanwendungen.',
      },
    {
      icon: <FaReact size={32} style={{ color: '#61DAFB' }} />,
      title: 'React',
      description: 'Eine JavaScript-Bibliothek zur Entwicklung von Benutzeroberflächen.',
    },

    {
        icon: <SiNextdotjs size={32} style={{ color: '#000000' }} />,
        title: 'Next.js',
        description: 'Ein React-Framework für die Entwicklung von serverseitig gerenderten React-Anwendungen.',
      }
      ,
    {
      icon: <SiTypescript size={32} style={{ color: '#3178C6' }} />,
      title: 'TypeScript',
      description: 'Ein statisch typisiertes Superset von JavaScript, das die Code-Qualität verbessert.',
    },
    {
      icon: <FaHtml5 size={32} style={{ color: '#E54D26' }} />,
      title: 'HTML5',
      description: 'Die Markup-Sprache für den Aufbau von Webseiten und Webanwendungen.',
    },
    {
      icon: <FaCss3 size={32} style={{ color: '#2965F1' }} />,
      title: 'CSS3',
      description: 'Die Stylesheet-Sprache zur Gestaltung von HTML-Dokumenten.',
    },
    {
        icon: <FaSass size={32} style={{ color: '#CC6699' }} />,
        title: 'Sass',
        description: 'Ein CSS-Präprozessor, der die Stylesheet-Erstellung erleichtert und erweitert.',
      },
    {
        icon: <SiTailwindcss size={32} style={{ color: '#38B2AC' }} />,
        title: 'Tailwind CSS',
        description: 'Ein Utility-First CSS-Framework für schnelles und effizientes Styling.',
      },

    {
      icon: <FaNodeJs size={32} style={{ color: '#68A063' }} />,
      title: 'Node.js',
      description: 'Eine serverseitige JavaScript-Laufzeitumgebung für die Entwicklung von Anwendungen.',
    },
    {
      icon: <SiRedux size={32} style={{ color: '#764ABC' }} />,
      title: 'Redux',
      description: 'Ein Zustandsmanagement-Tool für React-Anwendungen zur effizienten Datenverwaltung.',
    },

    {
        icon: <TbBrandReactNative size={32} style={{ color: '#61DAFB' }} />,
        title: 'React Native',
        description: 'Facebooks Open-Source-Framework für mobile Anwendungen mit Code-Wiederverwendung zwischen iOS und Android.',
      },
    {
      icon: <SiMysql size={32} style={{ color: '#00758F' }} />,
      title: 'MySQL',
      description: 'Ein relationales Datenbankmanagementsystem für die Speicherung von Daten.',
    },
    {
      icon: <FaPhp size={32} style={{ color: '#777BB4' }} />,
      title: 'PHP',
      description: 'Eine serverseitige Skriptsprache für die Entwicklung von Webanwendungen.',
    },
    {
      icon: <FaWordpress size={32} style={{ color: '#21759B' }} />,
      title: 'WordPress',
      description: 'Ein Content-Management-System (CMS) zur Erstellung von Websites und Blogs.',
    },
    {
      icon: <SiJquery size={32} style={{ color: '#0769AD' }} />,
      title: 'jQuery',
      description: 'Eine JavaScript-Bibliothek zur Vereinfachung von DOM-Manipulationen und Event-Handling.',
    },
    {
      icon: <FaGit size={32} style={{ color: '#F1502F' }} />,
      title: 'Git',
      description: 'Ein verteiltes Versionskontrollsystem zur Nachverfolgung von Änderungen im Quellcode.',
    },
    {
      icon: <FaGithub size={32} style={{ color: '#181717' }} />,
      title: 'GitHub',
      description: 'Eine Plattform für die Versionskontrolle und Zusammenarbeit an Softwareprojekten.',
    },
    {
      icon: <SiVisualstudiocode size={32} style={{ color: '#007ACC' }} />,
      title: 'Visual Studio Code',
      description: 'Ein plattformübergreifender Code-Editor mit Unterstützung für viele Programmiersprachen.',
    },
    {
      icon: <FaLinux size={32} style={{ color: '#F5A800' }} />,
      title: 'Linux',
      description: 'Ein quelloffenes Unix-ähnliches Betriebssystem, das weit verbreitet in der Softwareentwicklung eingesetzt wird.',
    },
    {
      icon: <SiVercel size={32} style={{ color: '#000000' }} />,
      title: 'Vercel',
      description: 'Eine Plattform für die Bereitstellung von Frontend- und Serverless-Anwendungen.',
    },
    {
      icon: <SiGooglesearchconsole size={32} style={{ color: '#4285F4' }} />,
      title: 'Google Search Console',
      description: 'Google-Tool zur Überwachung der Sichtbarkeit in Suchergebnissen und wichtiger Informationen wie Indexierungsstatus.',
    },
  ];
  