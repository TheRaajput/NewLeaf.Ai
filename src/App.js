import React, { useState } from 'react'
import "./App.css";
import MainInput from "./Component/Body/MainInput";
import Navbar from "./Component/Navbar/NavBar";
import placeholder from "./Component/Images/placeholder.png";
import Result from './Component/Result/Result';

function App() {

  const [Image, setImage] = useState(null)
  

  return (
    <div>
      <Navbar />
      <MainInput Image={Image ? URL.createObjectURL(Image) : placeholder} onSetImage = {setImage}/>
      <Result/>
    </div>
  );
}

export default App;
