"use client";

import React, { useState } from "react";

const Navbar = () => {
  // Hamburger menüsü için state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Menü açma/kapama işlevi
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className=" w-full p-4 fixed top-0 left-0 bg-blue-300 bg-opacity-50 backdrop-blur-lg">
      <div className="flex items-center justify-between">
        <div className="text-3xl">
          <a className="text-white font-semibold" href="#">
            Logo
          </a>
        </div>

        <nav className="hidden md:block">
          <ul className="flex gap-3 tracking-wide">
            <li className="text-white font-semibold hover:text-neutral-300">
              Anasayfa
            </li>
            <li className="text-white font-semibold hover:text-neutral-300">
              Hakkımızda
            </li>
            <li className="text-white font-semibold hover:text-neutral-300">
              Blog
            </li>
            <li className="text-white font-semibold hover:text-neutral-300">
              Doktorlar
            </li>
            <li className="text-white font-semibold hover:text-neutral-300">
              İletişim
            </li>
          </ul>
        </nav>

        {/* "Randevu Al" Butonu (Büyük ekranlarda dışarıda) */}
        <div className="hidden md:block">
          <button className="bg-gradient-to-r from-orange-600 to-orange-400 text-white font-light py-2 px-3 hover:bg-orange-700 rounded-lg">
            Randevu Al
          </button>
        </div>

        {/* Hamburger Menü Butonu (Mobil ekranlar için) */}
        <button
          className="md:hidden flex flex-col space-y-2"
          onClick={toggleMenu}
        >
          <span className="w-6 h-1 bg-black"></span>
          <span className="w-6 h-1 bg-black"></span>
          <span className="w-6 h-1 bg-black"></span>
        </button>

        {/* Menü (Mobil ekranlar için) */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-blue-300 p-4 md:hidden`}
        >
          <ul className="flex flex-col items-start py-4 space-y-4 space-x-2 ">
            <li className="text-white hover:text-orange-600">Anasayfa</li>
            <li className="text-white hover:text-orange-600 ">Hakkımızda</li>
            <li className="text-white hover:text-orange-600">Blog</li>
            <li className="text-white hover:text-orange-600">Doktorlar</li>
            <li className="text-white hover:text-orange-600">İletişim</li>
          </ul>
          {/* "Randevu Al" Butonu (Mobil ekranlarda hamburger menüsüne) */}
          <div className="flex justify-start">
            <button className="bg-gradient-to-r from-orange-600 to-orange-400 py-2 px-3 hover:bg-orange-700 rounded-lg mt-4">
              Randevu Al
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
