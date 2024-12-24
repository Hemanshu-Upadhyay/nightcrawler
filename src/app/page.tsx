"use client";

import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Explore from "./sections/Explore";
import GetStarted from "./sections/GetStarted";
import WhatsNew from "./sections/WhatsNew";
import World from "./sections/World";
import Insights from "./sections/Insights";
import Feedback from "./sections/Feedback";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    // Check if the user is on a mobile device
    const checkIfMobile = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    checkIfMobile();

    // Add event listener to handle window resizing
    window.addEventListener("resize", checkIfMobile);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="bg-gray-900 overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Mobile Warning Popup */}
      {isMobile && showPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-red-600 text-white p-6 rounded-lg max-w-xs text-center">
            <p>
              Warning: This site is not fully optimized for mobile devices.
              Please use a desktop for the best experience.
            </p>
            <button
              onClick={closePopup}
              className="mt-4 bg-white text-red-600 px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <Hero />

      {/* About and Explore Sections */}
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>

      {/* Get Started and Whats New Sections */}
      <div className="relative">
        <GetStarted />
        <div className="gradient-02 z-0" />
        <WhatsNew />
      </div>

      {/* World Section */}
      <World />

      {/* Insights and Feedback Sections */}
      <div className="relative">
        <Insights />
        <div className="gradient-04 z-0" />
        <Feedback />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
