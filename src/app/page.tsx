"use client";

import HeroSection from "./components/HeroSection";
import SecondScreen from "./components/SecondScreen";
import { useRef } from "react";

// Force static generation at build time
export const dynamic = "force-static";

export default function Home() {
  const handleBookingClick = () => {
    window.open(
      "https://t.me/neurotypester_bot?text=/start",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const secondScreenRef = useRef<HTMLDivElement>(null);
  const handleMoreClick = () => {
    secondScreenRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <HeroSection
        handleBookingClick={handleBookingClick}
        handleMoreClick={handleMoreClick}
      />
      <div ref={secondScreenRef}>
        <SecondScreen />
      </div>
    </>
  );
}
