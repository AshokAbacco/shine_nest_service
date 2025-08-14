import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#030637] text-white py-12 px-6 md:px-16">
      {/* Top Section: Links only */}
      <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-10">
        {/* Logo + Menu */}
        <div>
          <div className="mb-3 flex justify-center">
            <img
              src="/images/img2.png"
              alt="Company Logo"
              className="w-[300px]  object-contain"
              style={{
                filter: "",
              }}
            />
          </div>
          <ul className="space-y-2 text-gray-300">
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Company</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/FAQ">FAQs</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Support</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/contact">Customer Support</Link></li>
            <li><Link to="/terms-and-privacy">Privacy Policy</Link></li>
            <li><Link to="/terms-and-privacy">Terms & Conditions</Link></li>
          </ul>
        </div>
        {/* Address in bottom right */}
        <div className="text-white text-sm leading-5 md:text-light max-w-xs">
          <h1 className="text-[1.2rem] font-semibold mb-4">Address</h1>
          <p>Ground Floor, No 20, Krishna Temple Road, Near Ramya Provision Store, Dodda Bommasandra, Bengaluru, 560097</p>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        {/* Social Icons */}
        <div className="flex space-x-5 mb-4 md:mb-0">
          <a href="#"><Twitter className="hover:text-white" size={20} /></a>
          <a href="#"><Facebook className="hover:text-white" size={20} /></a>
          <a href="#"><Instagram className="hover:text-white" size={20} /></a>
          <a href="#"><Github className="hover:text-white" size={20} /></a>
        </div>

        {/* Links */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <Link to="/terms-and-privacy">Privacy Policy</Link>
          <Link to="/terms-and-privacy">Terms & Conditions</Link>
          <Link to="/contact">Support</Link>
        </div>

        {/* Copyright */}
        <div>
          © Copyright {new Date().getFullYear()}. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
