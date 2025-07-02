import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; // ✅ Import Footer
import { motion } from 'framer-motion';

const SignupOrLogin = () => {
  return (
    <section className="min-h-screen flex flex-col justify-between bg-gradient-to-r from-[#0000] to-[#009ffd] text-white px-4">
      <Navbar />

      {/* ✅ Vertically centered content */}
      <div className="flex flex-col items-center justify-center flex-grow space-y-10 pt-16">
        <h1 className="text-5xl md:text-6xl font-extralight leading-tight text-center">
          WELCOME TO NEUROMIND
        </h1>

        {/* ✅ Buttons Side by Side */}
        <div className="flex space-x-6">
          <motion.a
            href="/login"
            className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-full shadow hover:bg-blue-100 transition"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Log In
          </motion.a>

          <motion.a
            href="/signup"
            className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-full shadow hover:bg-blue-100 transition"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Sign Up
          </motion.a>
        </div>
      </div>

      {/* ✅ Footer at the bottom */}
      <Footer />
    </section>
  );
};

export default SignupOrLogin;
