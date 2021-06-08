import React, { useState } from 'react'
import MainInput from "./Body/MainInput";
import Navbar from "./Navbar/NavBar";
import placeholder from "./Images/placeholder.png";
import Result from './Result/Result';

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
