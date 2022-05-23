import { createContext } from 'react';
import { ITranslation } from '../interfaces';
export type LanguageContextProps = {
  texts: ITranslation;
  handleLanguage: Function;
};
export const LanguageContext = createContext<LanguageContextProps>(
  {} as LanguageContextProps
);
