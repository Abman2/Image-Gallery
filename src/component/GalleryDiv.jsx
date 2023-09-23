import React from "react";
import { AuthDetails } from "../Authentication files/Home";
import { DragAndDropSection } from "./DragAndDropSection";
import Footer from "./Footer";

export const GalleryDiv = () => {
  const { authuser, userSignOut } = AuthDetails();
  return (
    <>
      {authuser ? (
        <>
          <header className="h-96 sm:h-screen bg-black   ">
            <nav className="top-0 h-12 flex items-center justify-between  sm:max-w-6xl mx-auto max-w-sm sticky  ">
              <h1 className="text-xl font-medium text-white">{authuser.email}</h1>
              <div className=" sm:inline hidden">
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Search>>>>"
                  className="bg-transparent border border-white w-80 rounded-md py-0.5  px-3 "
                />
              </div>

              <div>
                <button
                  onClick={userSignOut}
                  className="bg-green-700 border rounded-lg text-white py-1 px-5 font-semibold text-lg text-center border-white ">
                  Sign out
                </button>
              </div>
            </nav>
            <div className="mx-auto flex flex-col items-center justify-center h-5/6 text-center">
              <h1 className="text-6xl sm:text-7xl text-green-700 font-extrabold ">Welcome to Gallery</h1>
              <i className="text-white">Home of your favourite pictures</i>
            </div>
          </header>
          <DragAndDropSection />

      <Footer />
        </>
      ) : (
        alert("invalid sign in")
      )}

      
    </>
  );
};
