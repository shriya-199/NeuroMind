import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full fixed bottom-0 left-0 z-50 backdrop-blur-md 
                    bg-gradient-to-t from-[#009ffd] to-[#0000] 
                    border-b border-white/20 shadow-md text-white">
     <div className="w-full px-6 py-4 flex justify-between items-center">

        <p>&copy; {new Date().getFullYear()} NeuroMind. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="/about" className="hover:underline">About Us</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="/privacy" className="hover:underline">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
