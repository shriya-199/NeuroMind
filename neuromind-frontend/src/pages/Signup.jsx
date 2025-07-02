import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    dob: '',
    gender: '',
    password: '',
    confirmPassword: '',
  });

  const [showPopup, setShowPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setShowErrorPopup(true);
      return;
    }

    const user = {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      mobile: form.mobile,
      dob: form.dob,
      gender: form.gender,
      password: form.password,
    };

    // Store the user
    localStorage.setItem('neuroUser', JSON.stringify(user));

    // Redirect to dashboard
    setShowPopup(false);
    navigate('/dashboard');
  };

  const isFormValid =
    form.firstName &&
    form.lastName &&
    form.email &&
    form.mobile &&
    form.dob &&
    form.gender;

  return (
    <section className="min-h-screen bg-gradient-to-r from-[#0000] to-[#009ffd] text-white px-4">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] pt-20">
        <h2 className="text-4xl font-light mb-10 text-center">Create Your Account</h2>
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-xl max-w-5xl w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Column */}
            <div className="space-y-5">
              <input type="text" name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} className="w-full px-6 py-4 rounded-full bg-white/20 text-white placeholder-white/70 border" />
              <input type="text" name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} className="block md:hidden w-full px-6 py-4 rounded-full bg-white/20 text-white placeholder-white/70 border" />
              <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full px-6 py-4 rounded-full bg-white/20 text-white placeholder-white/70 border" />
              <input type="text" name="mobile" placeholder="Mobile" value={form.mobile} onChange={handleChange} className="w-full px-6 py-4 rounded-full bg-white/20 text-white placeholder-white/70 border" />
              <input type="date" name="dob" value={form.dob} onChange={handleChange} className="w-full px-6 py-4 rounded-full bg-white/20 text-white border" />
              <select name="gender" value={form.gender} onChange={handleChange} className="w-full px-6 py-4 rounded-full bg-white/20 text-white border">
                <option value="" disabled>Select Gender</option>
                <option className="text-black" value="Female">Female</option>
                <option className="text-black" value="Male">Male</option>
                <option className="text-black" value="Other">Other</option>
              </select>
            </div>

            {/* Right Column */}
            <div className="flex flex-col justify-between items-center h-full">
              <input type="text" name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} className="hidden md:block w-full px-6 py-4 rounded-full bg-white/20 text-white border" />
              <button type="button" onClick={() => setShowPopup(true)} disabled={!isFormValid} className={`mt-auto mb-auto w-24 h-24 rounded-full text-blue-700 font-semibold ${isFormValid ? 'bg-white hover:bg-blue-100' : 'bg-gray-400 cursor-not-allowed'}`}>
                Next
              </button>
            </div>
          </div>
        </motion.form>

        {/* Password Popup */}
        {showPopup && (
          <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
            <div className="bg-gradient-to-br from-blue-100 via-white to-blue-200 rounded-xl p-8 shadow-2xl w-full max-w-md">
              <h3 className="text-xl font-semibold mb-4 text-black text-center">Set Your Password</h3>
              <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} className="w-full mb-4 px-4 py-3 rounded-full border text-black border-gray-300" />
              <input type="password" name="confirmPassword" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} className="w-full mb-6 px-4 py-3 rounded-full text-black border border-gray-300" />
              <div className="flex justify-between">
                <button className="bg-gray-300 text-black px-4 py-2 rounded-full hover:bg-gray-400" onClick={() => setShowPopup(false)}>Cancel</button>
                <button type="button" onClick={handleSubmit} className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">Submit</button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Password Mismatch Popup */}
        {showErrorPopup && (
          <motion.div initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
            <div className="bg-gradient-to-br from-red-100 via-white to-red-200 rounded-xl p-6 shadow-2xl w-full max-w-md text-center">
              <h3 className="text-lg font-bold text-red-800 mb-4">Passwords Do Not Match</h3>
              <p className="text-gray-700 mb-6">Please re-enter the same password in both fields.</p>
              <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600" onClick={() => setShowErrorPopup(false)}>Okay</button>
            </div>
          </motion.div>
        )}
      </div>
      <Footer />
    </section>
  );
};

export default Signup;
