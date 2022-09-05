import React, {useState} from "react";
import './App.css';
import Callback from "./callback"


//Parent
export default function App() {
  const[UIcolor, setUIColor] = useState(null);

  //our callback function
  const getColor = (color) => {
    setUIColor(color);
  }
  return (
    <div className="App">
      <div
      className="App_color_container"
      style={{background:`${UIcolor}`}}
    ></div>
    <Callback getColor={getColor}/>

    </div>
  );
}

