import { useState } from 'react';
import { ITranslation } from '../interfaces';
import { LanguageContext } from './languagecContext';

const initialLanguage: string = 'en';
const translations: ITranslation = {
  es: {
    titleToggleLanguage: 'Idioma',
    spanishToggle: 'Español',
    englishToggle: 'Ingles',
    headerHome: 'Hola, bienvenio a mi portafolio',
    homeCite: 'Controlar la complejidad es la esencia de la programación.',
    aboutText: `Hola, soy Michael Rodríguez, actualmente soy estudiante de
              ingeniería de sistemas y redes informáticas en la Universidad
              Gerardo Barrios de Usulután. Apasionado por el desarrollo de
              aplicaciones web y un poco en aplicaciones móviles, realmente me
              gusta usar JavaScript tanto en frontend como en backend; Cabe
              señalar que manejo mejor el backend usando tecnologías del lado
              del servidor con JavaScript, aunque estoy aprendiendo a usar
              TypeScript para manejar mejor el código y la escalabilidad de
              este. La programación se ha convertido en uno de mis mayores
              pasatiempos ya que me gusta mucho pero también me gusta pasar
              tiempo con los videojuegos o entretenerme a través del streaming.`,
    menuHome: 'Inicio',
    menuAbout: 'Sobre Mi',
    menuProjects: 'Proyectos',
    languagesAndTools: 'Lenguajes y Herramientas',
  },
  en: {
    titleToggleLanguage: 'Language',
    spanishToggle: 'Spanish',
    englishToggle: 'English',
    headerHome: ' Hi, Welcome to My Portfolio',
    homeCite: 'Controlling complexity is the essence of programming',
    aboutText: `Hi, I'm Michael Rodríguez, I'm currently a student at
              systems engineering and computer networks at the university
              Gerardo Barrios of Usulutan. Passionate about development
              web apps and some mobile apps
              like to use JavaScript on both frontend and backend; I fit in better managing the backend better using secondary technologies
              from the server with JavaScript, although I'm learning how to use
              TypeScript to better handle the code and scalability of
              East. Programming has become one of my greatest
              hobbies since I like it a lot but I also like to spend
              time with video games or entertain myself through streaming`,
    menuHome: 'Home',
    menuAbout: 'About Me',
    menuProjects: 'Projects',
    languagesAndTools: 'Languages and Tools',
  },
};

interface props {
  children: JSX.Element | JSX.Element[];
}
export const LanguageProvider = ({ children }: props) => {
  const [language, setLanguage] = useState<string>(initialLanguage);
  const [texts, setTexts] = useState(translations[language]);

  const handleLanguage = (e: any) => {
    if (e === 'es') {
      setLanguage('es');
      setTexts(translations.es);
    } else {
      setLanguage('en');
      setTexts(translations.en);
    }
  };

  return (
    <LanguageContext.Provider value={{ texts, handleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
