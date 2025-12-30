import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FaCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-amber-100 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h1 className="text-2xl font-bold text-amber-700">
            M.M. Vidya Mandir
          </h1>
          <p className="mt-3 text-gray-700 leading-relaxed">
            A place where young minds grow with values, knowledge and joy.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Quick Links
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li className="hover:text-amber-700 hover:underline cursor-pointer">Home</li>
            <li className="hover:text-amber-700 hover:underline cursor-pointer">About Us</li>
            <li className="hover:text-amber-700 hover:underline cursor-pointer">Admissions</li>
            <li className="hover:text-amber-700 hover:underline cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <IoIosContact size={30} />
            Contact Us
          </h2>

          <p className="text-gray-700 flex items-center gap-2">
            <MdLocationPin size={30} />
            Pune, Maharashtra
          </p>

          <p className="text-gray-700 mt-1  flex items-center gap-2 ml-1">
            <FaPhoneAlt size={20} />
            +91 98765 43210
          </p>

          <p className="text-gray-700 mt-1 flex items-center gap-2">
            <IoMdMail size={30} />
            mmvidyamandir@gmail.com
          </p>
        </div>
      </div>

      <div className="bg-amber-100 text-center py-3 text-gray-700 text-sm  flex items-center justify-center gap-0.5">
        <FaCopyright size={10} />
        {new Date().getFullYear()} M.M. Vidya Mandir Primary School. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
