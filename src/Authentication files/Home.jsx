import React, { useEffect, useState } from "react";
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export const AuthDetails = () => {

  const navigate = useNavigate();
  const [authuser, setAuthuser] = useState([]);
  const listen=() => onAuthStateChanged(auth, (user) => {
    user ? setAuthuser(user) : setAuthuser(null);

   
  });
  useEffect(() => {
listen()

  }, []);


  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/Image-Gallery/");
      })
      .catch((err) => console.log(err));
  };
 

  return (
    {authuser,userSignOut}
  );
};
