import React, { useContext } from 'react';
import { LanguageContext } from '../context/languageContext'; // Language context

const LanguageSelector = () => {
  const { language, setLanguage } = useContext(LanguageContext); // Access language context

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="language-selector">
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('urdu')}>Urdu</button>
      {/* Add buttons for other languages as needed */}
    </div>
  );
};

export default LanguageSelector;
