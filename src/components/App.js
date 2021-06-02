import React, { useState } from "react";
import GoogleTranslate from "./apis/GoogleTranslate";
import Accordion from "./Accordion";
import Search from "./search/Search";
import Dropdown from "./dropdown/Dropdown";
import Route from "./Route";
import Header from "./Header";


const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React",
    content: "React is a favorite Js library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The ColorRed",
    value: "red",
  },
  {
    label: "Fine Lady Pink",
    value: "pink",
  },
  {
    label: "Desire Orange",
    value: "orange",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
       <Header/>
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/translate">
        <GoogleTranslate />
      </Route>
      <Route path="/dropdown" >
        <Dropdown label='Select a color'
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
    </div>
  );
};

export default App;
