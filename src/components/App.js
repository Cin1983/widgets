import React, { useState } from "react";
// import Accordion from "./Accordion";
// import Search from "./search/Search";
import Dropdown from './dropdown/Dropdown';


// const items = [
//   {
//     title: "What is React?",
//     content: "React is a front end javascript framework",
//   },
//   {
//     title: "Why use React",
//     content: "React is a favorite Js library among engineers",
//   },
//   {
//     title: "How do you use React?",
//     content: "You use React by creating components",
//   },
// ];

const options = [
  {
    label: 'The ColorRed',
    value: 'red',
  },
  {
    label: 'Fine Lady Pink',
    value: 'pink',
  },
  {
    label: 'Desire Orange',
    value: 'orange',
  },
];

const App= () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <button onClick={()=>setShowDropdown (!showDropdown)}>Toggle Dropdown</button>
      {showDropdown ?
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options} />: null
      }
    </div>
  );
};

export default App