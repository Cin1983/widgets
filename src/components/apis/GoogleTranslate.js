import React, { useState } from "react";
import Dropdown from "../dropdown/Dropdown";
import Convert from "../Convert";

// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM




const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "ar",
  },
  {
    label: "Japanese",
    value: "ja",
  },
  {
    label: "Spanish",
    value: "es",
  },
];

const GoogleTranslate = () => {
  const [language, setLanguage] = useState(options[4]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui form">
              <div className="field">
                  <label>Enter text!!!</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label="Please select a language!!!"
        onSelectedChange={setLanguage}
        selected={language}
        options={options}
          />
          <hr />
          <h3 className='ui header'> Output</h3>
          <Convert text={text} language={language}/>
    </div>
  );
};

export default GoogleTranslate;
