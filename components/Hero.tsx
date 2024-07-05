"use client";

import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero">
      <div className="search-box items-center flex">
        <form className="w-full flex justify-center">
          <div className="search-box-item w-1/5 h-10 items-center flex rounded-lg p-2 mr-4">
            <span className="mr-2">
              <svg width="20" height="20" viewBox="0 0 48 48" fill="none"><path d="M31 40.178C28.7084 42.2154 26.5043 43.7801 24.992 44.7717C23.7735 45.5708 22.2331 45.5748 21.0145 44.776C16.3338 41.7078 5 33.1335 5 22.0441C5 12.0786 13.0589 4 23 4C32.5915 4 40.4309 11.5204 40.9704 21" stroke="#212121" stroke-width="3.6" stroke-linecap="round"></path><circle cx="23" cy="21.5" r="6.5" stroke="#212121" stroke-width="3.6"></circle><path d="M32 33H45" stroke="#212121" stroke-width="3.6" stroke-linecap="round"></path><path d="M39 27L45 33L39 39" stroke="#212121" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </span>
            <span className="">
              <input id="" className="" placeholder="出発地" />
            </span>
          </div>
          <div className="search-box-item w-1/5 h-10 items-center flex rounded-lg p-2 mr-4 pr-2">
            <span className="mr-2">
              <svg className="h-6 w-6" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="11" r="3" />  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" /></svg>
            </span>
            <span className="">
              <input id="" className="" placeholder="行き先" />
            </span>
          </div>
          <div className="search-box-item w-1/5 h-10 items-center flex rounded-lg p-2 mr-4 pr-2">
            <span className="mr-2">
              <svg className="h-6 w-6" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <rect x="4" y="5" width="16" height="16" rx="2" />  <line x1="16" y1="3" x2="16" y2="7" />  <line x1="8" y1="3" x2="8" y2="7" />  <line x1="4" y1="11" x2="20" y2="11" />  <line x1="11" y1="15" x2="12" y2="15" />  <line x1="12" y1="15" x2="12" y2="18" /></svg>
            </span>
            <span className="">
              <input id="" className="" placeholder="出発日" />
            </span>
          </div>
          <div className="search-box-item w-1/5 h-10 items-center flex rounded-lg p-2 mr-4 pr-2">
            <span className="mr-2">
              <svg className="h-6 w-6" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="9" cy="7" r="4" />  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />  <path d="M16 3.13a4 4 0 0 1 0 7.75" />  <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" /></svg>
            </span>
            <span className="">
              <input id="" className="" placeholder="人数" />
            </span>
          </div>
          <div className="items-center flex">
            <span className="search-link px-8 py-3 rounded-lg font-bold">
              <Link href="#" className="">検索</Link>
            </span>
          </div>
        </form>
      </div>
      <div className="overlay">
      </div>
      <div className="content">
        <video className="w-full h-full" autoPlay muted loop>
          <source src="https://www.vietcombank.com.vn/-/media/Project/VCB-Sites/VCB/Home-page/KHCN/UPDATE-2024/KHCN/VCB_CN-DAY_v3fix2.webm?mh=900&mw=1440&sc_lang=vi-VN&ts=20240312081856&hash=769DD5A2CEA38D69FE1E471899DEE365" />
        </video>
      </div>
    </div>
  );
};

export default Hero;
