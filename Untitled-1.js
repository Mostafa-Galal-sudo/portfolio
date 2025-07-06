import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full flex justify-between items-center p-6 bg-black bg-opacity-80 z-10">
        <h1 className="text-2xl font-bold">CyberSec | Your Name</h1>
        <nav className="space-x-6">
          <a href="#about" className="hover:text-cyan-400">About</a>
          <a href="#work" className="hover:text-cyan-400">Work</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </nav>
      </header>
      
      {/* Introduction */}
      <motion.section 
        id="about"
        className="h-screen flex flex-col justify-center items-center text-center px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-5xl font-bold mb-4">I'm a Cybersecurity Specialist</h2>
        <p className="text-lg text-gray-400 max-w-2xl">Passionate about ethical hacking, penetration testing, and digital forensics.</p>
      </motion.section>
      
      {/* Work Section */}
      <section id="work" className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gray-900">
        <h2 className="text-4xl font-semibold mb-6">My Work</h2>
        <div className="space-y-6">
          <motion.div className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition" whileHover={{ scale: 1.05 }}>
            <h3 className="text-xl font-bold">180-degree Radar</h3>
            <p className="text-gray-400">A security scanning system using radar technology.</p>
          </motion.div>
          <motion.div className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition" whileHover={{ scale: 1.05 }}>
            <h3 className="text-xl font-bold">Public Network Analyzer</h3>
            <p className="text-gray-400">Tool for analyzing public WiFi security.</p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact */}
      <section id="contact" className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-4xl font-semibold mb-4">Contact Me</h2>
        <div className="flex space-x-6 text-3xl">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400"><FaGithub /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400"><FaLinkedin /></a>
          <a href="mailto:your@email.com" className="text-gray-400 hover:text-cyan-400"><FaEnvelope /></a>
        </div>
      </section>
    </div>
  );
}
