"use client";

import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";
import { PiThreadsLogoBold } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10">
      <div className="flex flex-col items-center text-center space-y-4 mt-2 mb-8">
        <h2 className="font-bold text-3xl text-white">
          Ready To Design Your Dream Home?
        </h2>
        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-semibold 
                     hover:bg-orange-600 transition duration-300 shadow-lg">
          Book Free Consultation
        </button>
      </div>
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">

        {/* Column 1 */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { name: "Home", link: "/" },
              { name: "Modular Kitchen Designs", link: "/modular-kitchen" },
              { name: "Bedroom Designs", link: "/bedroom-designs" },
              { name: "Living Room Designs", link: "/living-room" },
              { name: "Dining Room Designs", link: "/dining-room" },
              { name: "1 BHK Interior Designs", link: "/1bhk" },
            ].map((item, index) => (
              <li key={index}>
                <a href={item.link} className="hover:text-orange-400 transition">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>


        {/* Column 2 */}
        <div>
          <h3 className="text-white font-semibold mb-3">Designs & Guides</h3>
          <ul className="space-y-2">
            {[
              { name: "Design Gallery", link: "/interior-design" },
              { name: "Wardrobe Designs", link: "/wardrobe" },
              { name: "Kids Bedroom Designs", link: "/kids-bedroom" },
              { name: "Bathroom Designs", link: "/bathroom" },
              { name: "Guides", link: "/guides" },
              { name: "2 BHK Interior Designs", link: "/2bhk" },
            ].map((item, index) => (
              <li key={index}>
                <a href={item.link} className="hover:text-orange-400 transition">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>


        {/* Column 3 */}
        <div>
          <h3 className="text-white font-semibold mb-3">More Services</h3>
          <ul className="space-y-2">
            {[
              { name: "Space Saving Designs", link: "/space-saving-designs" },
              { name: "Why SpaceCraftInterio", link: "/why-spacecraftinterio" },
              { name: "FAQs", link: "/faqs" },
              { name: "Contact Us", link: "/contact" },
              { name: "3 BHK Interior Designs", link: "/3bhk" },
            ].map((item, index) => (
              <li key={index}>
                <a href={item.link} className="hover:text-orange-400 transition">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Social Media Icons */}
      <div className="mt-6 flex justify-center space-x-6">
        <a href="https://www.facebook.com/profile.php?id=61572602092256&mibextid=ZbWKwL" target="_blank" className="text-gray-400 hover:text-orange-400 transition text-xl">
          <FaFacebookF />
        </a>
        <a href="https://x.com/SpaceCraftIntri?t=kJ0AWKHtf7yYOYFZxqE27g&s=09" target="_blank" className="text-gray-400 hover:text-orange-400 transition text-xl">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/spacecraft_interio?igsh=MWg0Zjh4c24yNHo5Ng==" target="_blank" className="text-gray-400 hover:text-orange-400 transition text-xl">
          <FaInstagram />
        </a>
        <a href="https://youtube.com/@spacecraftinterio?si=H5DTm3TXYvkzN8k2" target="_blank" className="text-gray-400 hover:text-orange-400 transition text-xl">
          <FaYoutube />
        </a>
        <a href="https://pin.it/6H3unBqZ9" target="_blank" className="text-gray-400 hover:text-orange-400 transition text-xl">
          <FaPinterest />
        </a>
        <a href="https://www.threads.net/@spacecraft_interio" target="_blank" className="text-gray-400 hover:text-orange-400 transition text-xl">
          <PiThreadsLogoBold />
        </a>
      </div>


      {/* Footer Bottom Section */}
      <div className="text-center text-gray-400 text-sm mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} SpaceCraftInterio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
