import React  from 'react';

function LanguageSelector(props) {

  const languageOptions = Object.keys(props.languages).map((language) => <option value={language}>{language}</option>);

  function handleLanguageChange(event) {
    props.handleLanguageChange(event.target.value);
  }

  return (
    <select
    currentLanguage={props.currentLanguage}
    onChange={handleLanguageChange} 
    >
      {languageOptions}

    </select>
  );
}

export default LanguageSelector;