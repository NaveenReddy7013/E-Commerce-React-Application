import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <>
      {/* Top Border */}
      <hr className="mt-5 border-gray-300" />

      {/* Footer Content */}
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-10 sm:gap-14 my-10 text-sm px-6 sm:px-12 lg:px-24">
        
        {/* Logo & Description */}
        <div>
          <img src={assets.logo} alt="Laffut Styles" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            quaerat assumenda quidem doloremque obcaecati soluta.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-lg font-semibold mb-5 text-gray-800">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            {["Home", "About Us", "Delivery", "Privacy Policy"].map((link, i) => (
              <li
                key={i}
                className="hover:text-orange-600 transition-colors cursor-pointer"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <p className="text-lg font-semibold mb-5 text-gray-800">Get In Touch</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="hover:text-orange-600 transition-colors cursor-pointer">
              +91 7013497287
            </li>
            <li className="hover:text-orange-600 transition-colors cursor-pointer">
              contact@laffutstyles.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-300 text-center py-4 text-gray-500 text-sm">
        © 2025 Laffut Styles. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
