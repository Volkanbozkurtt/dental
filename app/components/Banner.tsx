"use client";

import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Banner = () => {
  return (
    <div
      className=" w-full min-h-screen bg-black flex items-center justify-center bg-cover bg-center "
      style={{ backgroundImage: "url('/assets/dental.jpg')" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
        {/* Sol Alan */}
        <div className="flex flex-col items-start justify-center p-4 space-y-4  ">
          <h1 className="text-4xl font-bold text-white tracking-wider mt-16 ">
            Diş Problemleriniz <br /> Gözünüzde Büyümesin!
          </h1>
          <h2 className="text-2xl font-light text-white sm:text-center">
            Hızlıca randevu alarak hayatınızı daha özgüvenli yaşayabilirsiniz!
          </h2>
          <button className="bg-gradient-to-r from-orange-600 to-orange-400 text-white font-light py-2 px-3 hover:bg-orange-700 rounded-lg">
            Randevu Al
          </button>
          <div className="flex space-x-1 ">
            {/* 5 yıldız ikonu */}
            <i className="fas fa-star text-yellow-500"></i>
            <i className="fas fa-star text-yellow-500"></i>
            <i className="fas fa-star text-yellow-500"></i>
            <i className="fas fa-star text-yellow-500"></i>
            <i className="fas fa-star text-yellow-500"></i>
          </div>
          <h3 className="flex  text-white tracking-wide text-xl">
            7000+ Fazla memnun danışan
          </h3>
        </div>

        {/* Sağ Alan */}
        <div className="flex items-center justify-center p-8">
          <img src="/assets/mobilapp.png" alt="Phone" className="w-60 h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
