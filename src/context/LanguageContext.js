import React, { createContext, useState } from "react";
export const LanguageContext = createContext();
const texts = {
  es: {
    home: "Inicio",
    about: "Acerca de mí",
    projects: "Proyectos",
    welcome: "¡Bienvenido a mi portafolio!",
    description: "Soy Iván, desarrollador web.",
    hello: "Hola!",
    im: "Soy",
    projectsBtn: "Ver Proyectos",
    aboutBtn: "Más de mí",
    contactBtn: "Contacto",
    aboutTitle: "DEJAME PRESENTARME",
    aboutDescription1:
      "Soy Iván, Técnico en Programación e Informática y por el desarrollo web, la electrónica y la innovación tecnológica.",
    aboutDescription2: "Lenguajes y herramientas que domino:",
    aboutDescription3:
      "Me encanta construir productos útiles y escalables y estoy constantemente aprendiendo y aplicando nuevas tecnologías.",
      aboutTitlePart1: "Conoce quién",
  aboutTitlePart2: "SOY",
  aboutImageAlt: "acerca de mí",
  skillsTitle: "Habilidades",
  skillsHighlight: "Profesionales",
  toolsHighlight: "Herramientas",
  toolsTitle: "que uso",
  aboutCardIntro: "Hola a todos, soy",
  aboutCardName: "Iván",
  aboutCardLocation: "de Buenos Aires, Argentina.",
  aboutCardStudy: "Actualmente estoy formándome como Ingeniero en Sistemas en la UTN y trabajo en desarrollo web y sistemas.",
  aboutCardProfession: "Soy Técnico en Programación e Informática.",
 projectsHeading: "Mis",
  projectsHighlight: "Proyectos",
  projectsIntro: "Aquí tienes algunos proyectos en los que he trabajado recientemente.",
  project1Title: "Sitio Ecommerce",
  project1Desc: "Sala de chat personal o espacio de trabajo para compartir recursos y charlar con amigos, construido con React.js, Material-UI y Firebase. Incluye mensajería en tiempo real, intercambio de imágenes y reacciones en los mensajes.",
  project2Title: "Satelite Con Arduino",
  project2Desc: "Basicamente con un arduino UNO  y componentes desarrollamos una pagina para que los sensores tomen los datos y se plasmen en la pagina.",
  project3Title: "Pagina .NET",
  project3Desc: "Basicamente es una pagina que hice para aprender .NET",
  project4Title: "???",
  project4Desc: "???",
  project5Title: "???",
  project5Desc: "???",
  project6Title: "Sistema de inventario",
  project6Desc: "Clasificador CNN entrenado con el dataset FER-2013 usando Keras y TensorFlow. Detecta emociones humanas con un 60.1% de precisión. Usé OpenCV para identificar el rostro y luego predecir la emoción.",
  },
  en: {
    home: "Home",
    about: "About Me",
    projects: "Projects",
    welcome: "Welcome to my portfolio!",
    description: "I'm Iván, a web developer.",
    hello: "Hello!",
    im: "I'm",
    projectsBtn: "See Projects",
    aboutBtn: "About Me",
    contactBtn: "Contact",
    aboutTitle: "LET ME INTRODUCE MYSELF",
    aboutDescription1:
      "I am Ivan, a programming technician passionate about web development, electronics and technological innovation.",
    aboutDescription2: "Languages and tools I master:",
    aboutDescription3:
      "I love building useful and scalable products and constantly learning new technologies.",
       aboutTitlePart1: "Know who",
  aboutTitlePart2: "I AM",
  aboutImageAlt: "about me",
  skillsTitle: "Skills",
  skillsHighlight: "Professional",
  toolsHighlight: "Tools",
  toolsTitle: "I use",
  aboutCardIntro: "Hello everyone, I am",
  aboutCardName: "Ivan",
  aboutCardLocation: "from Buenos Aires, Argentina.",
  aboutCardStudy: "I am currently studying Systems Engineering at UTN and working in web development and systems.",
  aboutCardProfession: "I am a Programming and Informatics Technician, experienced in real projects for institutions, companies and independent clients.",
   projectsHeading: "My",
  projectsHighlight: "Projects",
  projectsIntro: "Here are some projects I have worked on recently.",
  project1Title: "Ecommerce Site",
  project1Desc: "Personal chat room or workspace to share resources and chat with friends, built with React.js, Material-UI and Firebase. Includes real-time messaging, image sharing, and reactions to messages.",
  project2Title: "Satellite with Arduino",
  project2Desc: "Basically with an Arduino UNO and components we developed a page so that sensors take data and display it on the page.",
  project3Title: ".NET Website",
  project3Desc: "Basically a page I made to learn .NET",
  project4Title: "???",
  project4Desc: "???",
  project5Title: "???",
  project5Desc: "???",
  project6Title: "Inventory System",
  project6Desc: "CNN classifier trained with the FER-2013 dataset using Keras and TensorFlow. Detects human emotions with 60.1% accuracy. Used OpenCV to identify the face and then predict the emotion.",
  }
};
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");

  const toggleLanguage = () => {
    setLanguage(prev => (prev === "es" ? "en" : "es"));
  };
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, texts: texts[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};