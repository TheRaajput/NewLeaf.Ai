import React, { useState } from "react";
import MainInput from "./Body/MainInput";
import Navbar from "./Navbar/NavBar";
import placeholder from "./Images/placeholder.png";
import Result from "./Result/Result";

function App() {
  const [Image, setImage] = useState(null);
  const [visibility, setvisibility] = useState("hidden");

  const onSubmitHandler = (events) => {
    events.preventDefault();
    let ImageData
    if (Image !== null) {
      ImageData = {
        image: URL.createObjectURL(Image),
        details: "Image Detail",
      };
      setvisibility("");
    }
    else
    {
      alert("Give Image")
    }
    console.log(ImageData)
  };

  return (
    <div>
      <Navbar />
      <MainInput
        Image={Image ? URL.createObjectURL(Image) : placeholder}
        onSetImage={setImage}
        submitHandler={onSubmitHandler}
      />
      <Result vis={visibility} />
    </div>
  );
}

export default App;
