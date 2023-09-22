import React from "react";
import Login from "./Authentication files/Login";
import {Routes,Route} from "react-router-dom"
import Signup from "./Authentication files/Signup";
import { GalleryDiv } from "./component/GalleryDiv";



function App() {
  return (
    <>
    <Routes>
      <Route path="/Image-Gallery/home" element={< GalleryDiv />} />
      <Route  path="/Image-Gallery/" element={ <Login />}/>
      <Route  path="/Image-Gallery/signUp" element={ <Signup />}/>

    </Routes>
   
     
    </>
  );
}

export default App;
