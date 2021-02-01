import React  from 'react';

function LanguageSelector(props) {


  function handleChange(event) {
    props.onChange(event.target.value);
  }

  return (
    <select
    language={props.language}
    onChange={handleChange} 
    >
      <option value="english">English</option>
      <option value="spanish">Español</option>
      <option value="hindi">हिन्दी</option>
    </select>
  );
}

export default LanguageSelector;