import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Welcome from "./Components/Welcome";
function App() {
  const [text,setText] = useState("");

const handleOnChanges = (event) => {
  setText(event.target.value);
}
  return (
    <>
    <p>Enter your Name <input type="text" value={text} onChange={handleOnChanges}/>
    </p>
    <Welcome name= {text}/>
    </>
  );
}

export default App;
