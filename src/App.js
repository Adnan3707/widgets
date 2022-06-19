import React, { useState } from 'react';
import Accordion from './components/Accordion'
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';
import './App.css';

// Start apps modified
const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components',
  },
];
const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'A Shade of Blue',
    value: 'blue',
  },
];
function App() {
  const [selected, setSelected] = useState("Select A Value");
  const [showDropdown, setShowDropdown] = useState(true);

  /*
  const showTranslate = () => {
    if (window.location.pathname === '/translate') { return <div>   <Translate /> </div> }
  }
  const showList = () => {
    if (window.location.pathname === '/list') { return <div>   <Translate /> </div> }
  }
  const showDropdownf = () => {
    if (window.location.pathname === '/dropdown') {
      return <div> <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button > {showDropdown ? <Dropdown selected={selected} onSelectChange={setSelected} options={options} /> : null}</div>
    }
  }
  const showAccordion = () => {
    if (window.location.pathname === '/') { return <div>   <Accordion items={items} /> </div> }
  }
 */
  return (
    <div>
      {/* <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button > */}
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {/* {showDropdown ? <Dropdown selected={selected} onSelectChange={setSelected} options={options} /> : null} */}
      {/* <Translate /> */}
      {/* {showTranslate()}
      {showList()}
      {showDropdownf()} */}
      {/* {showAccordion()} */}

      <Header />
      <Route path='/'>
        <div><Accordion items={items} /> </div>
      </Route>
      <Route path='/dropdown'>
        <div> <button onClick={() => setShowDropdown(!showDropdown)}>
          click for Toggle Dropdown
        </button > {showDropdown ? <Dropdown selected={selected} onSelectChange={setSelected} options={options} /> : null}</div>
      </Route>
      <Route path='/search'>
        <div><Search /> </div>
      </Route>
      <Route path='/translate'>
        <div>   <Translate /> </div>
      </Route>
    </div>
  )
}

export default App;
