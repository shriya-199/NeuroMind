import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showNoUserPopup, setShowNoUserPopup] = useState(false);

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem('neuroUser'));

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      navigate('/dashboard');
    } else {
      setShowNoUserPopup(true);
    }
  };

  const handleSignupRedirect = () => {
    setShowNoUserPopup(false);
    navigate('/signup');
  };

  return (
    <section className="min-h-screen bg-gradient-to-r from-[#0000] to-[#009ffd] text-white px-4">
      <Navbar />

      {/* Centered Login Container */}
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] space-y-8 pt-20">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-light text-center text-white tracking-wide">
          Login to Your NeuroMind Account
        </h2>

        {/* Input, Link, Button */}
        <div className="w-full max-w-md space-y-5 px-2 relative">
          {/* Email Input */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-3 rounded-full bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/40 transition"
            />
          </motion.div>

          {/* Password Input with Eye Icon */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-3 pr-12 rounded-full bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/40 transition"
            />
            <span
              className="absolute inset-y-0 right-4 flex items-center cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </span>
          </motion.div>

          {/* Forgot Password Link */}
          <motion.div
            className="text-right text-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <a
              href="#"
              className="relative text-white group transition-colors duration-300"
            >
              Forgot Password?
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500"></span>
            </a>
          </motion.div>

          {/* Login Button */}
          <motion.button
            type="button"
            onClick={handleLogin}
            className="w-24 bg-white text-blue-700 font-semibold py-3 rounded-full shadow-md hover:bg-blue-100 transition-all duration-300 justify-center flex items-center mx-auto"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Login
          </motion.button>
        </div>
      </div>

      {/* ❗ Not Registered Popup */}
      {showNoUserPopup && (
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
        >
          <div className="bg-gradient-to-br from-red-100 via-white to-red-200 rounded-xl p-6 shadow-2xl w-full max-w-md text-center">
            <h3 className="text-lg font-bold text-red-800 mb-4">
              Not a Member Yet
            </h3>
            <p className="text-gray-700 mb-6">
              Please signup — you're not a part of the NeuroMind family yet.
            </p>
            <button
              className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600"
              onClick={handleSignupRedirect}
            >
              Sign Up
            </button>
          </div>
        </motion.div>
      )}

      <Footer />
    </section>
  );
};

export default Login;
