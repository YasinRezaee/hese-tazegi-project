import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { MainPosts } from "./MainPosts";
import { Footer } from "./Footer";
import { AboutUs } from "./AboutUs";
import { ContactUs } from "./ContactUs";
import { Single } from "./Cards/Single";

export const MainContent = () => {
  return (
    <BrowserRouter>
      <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div className="border-b-2 border-neutral-100 px-6 py-11 dark:border-neutral-600 dark:text-neutral-50">
          <Header />
        </div>
        <div className="p-6">
          <Routes>
            <Route path="/" element={<MainPosts />} />
            <Route path="/single" element={<Single/>} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </div>
        <div className="border-t-2 border-neutral-100 dark:border-neutral-600 dark:text-neutral-50">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};
