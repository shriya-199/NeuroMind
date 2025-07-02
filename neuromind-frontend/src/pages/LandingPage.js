import React from 'react';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
const LandingPage = () => {
  return (
    <section className="min-h-screen flex flex-col bg-gradient-to-r from-[#2a2a] to-[#009ffd] text-white px-4">
  <div>
    <h1 className="text-5xl md:text-6xl font-extralight mb-4 leading-tight">
      NeuroMind
    </h1>
    <p className="text-lg md:text-xl italic">
      Caring for minds, before they forget to care.!!
      </p>
      <div className="mt-6 flex flex-col justify-centre items-center gap-4 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Link to="/signuporlogin" className="bg-white text-blue-700 font-semibold w-24 h-24 flex justify-center items-center rounded-full shadow hover:bg-blue-100 transition text-sm mt-50 animate-zoomIn ">
        Get Started
      </Link>
      </div>
    </div>
    </section>
  );
};

export default LandingPage;
