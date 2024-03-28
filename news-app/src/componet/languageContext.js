import React, { createContext, useState } from 'react';

export const LanguageContext = createContext(); // Create language context

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Initial language is English

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
