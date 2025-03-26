
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'EN' | 'RU';

interface Translations {
  [key: string]: {
    EN: string;
    RU: string;
  };
}

const translations: Translations = {
  // Navigation
  home: { EN: 'Home', RU: 'Главная' },
  features: { EN: 'Features', RU: 'Возможности' },
  pricing: { EN: 'Pricing', RU: 'Цены' },
  forClubs: { EN: 'For Clubs', RU: 'Для клубов' },
  myGames: { EN: 'My Games', RU: 'Мои игры' },
  about: { EN: 'About', RU: 'О нас' },
  contact: { EN: 'Contact', RU: 'Контакты' },
  
  // Auth
  login: { EN: 'Log In', RU: 'Вход' },
  register: { EN: 'Register', RU: 'Регистрация' },
  email: { EN: 'Email', RU: 'Эл. почта' },
  password: { EN: 'Password', RU: 'Пароль' },
  confirmPassword: { EN: 'Confirm Password', RU: 'Подтвердите пароль' },
  username: { EN: 'Username', RU: 'Имя пользователя' },
  usernamePlaceholder: { EN: 'Your username', RU: 'Ваше имя пользователя' },
  loggingIn: { EN: 'Logging in...', RU: 'Вход...' },
  registering: { EN: 'Registering...', RU: 'Регистрация...' },
  loginSuccess: { EN: 'Login Successful', RU: 'Вход выполнен' },
  welcomeBack: { EN: 'Welcome back!', RU: 'С возвращением!' },
  loginFailed: { EN: 'Login Failed', RU: 'Ошибка входа' },
  invalidCredentials: { EN: 'Invalid email or password', RU: 'Неверный email или пароль' },
  registerSuccess: { EN: 'Registration Successful', RU: 'Регистрация успешна' },
  accountCreated: { EN: 'Your account has been created', RU: 'Ваш аккаунт создан' },
  registerFailed: { EN: 'Registration Failed', RU: 'Ошибка регистрации' },
  passwordsDontMatch: { EN: 'Passwords do not match', RU: 'Пароли не совпадают' },
  registrationError: { EN: 'Error creating account', RU: 'Ошибка при создании аккаунта' },
  somethingWentWrong: { EN: 'Something went wrong', RU: 'Что-то пошло не так' },
  
  // Profile
  profile: { EN: 'Profile', RU: 'Профиль' },
  myProfile: { EN: 'My Profile', RU: 'Мой профиль' },
  logout: { EN: 'Log out', RU: 'Выйти' },
  language: { EN: 'Language', RU: 'Язык' },
  
  // Language
  languageChanged: { EN: 'Language Changed', RU: 'Язык изменен' },
  switchedTo: { EN: 'Language switched to English', RU: 'Язык переключен на Русский' },
  
  // Common actions
  search: { EN: 'Search', RU: 'Поиск' },
  clear: { EN: 'Clear', RU: 'Очистить' },
  view: { EN: 'View', RU: 'Смотреть' },
  details: { EN: 'Details', RU: 'Подробнее' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('EN');

  // Translation function
  const t = (key: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    return key; // Fallback to key if translation not found
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
