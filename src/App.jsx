import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import React from 'react'


function App() {
  return (
    <>
      <div className="bg-[url('/bg-img.png')] bg-cover bg-center bg-no-repeat min-h-screen">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default App;
