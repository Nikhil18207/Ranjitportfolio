"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Play, Volume2, VolumeX } from "lucide-react";

/**
 * HeroSection Component
 * 
 * A full-screen cinematic hero section for a videographer portfolio.
 * Features:
 * - Background video (or high-quality image fallback)
 * - Centered "LATEST WORK" bold heading
 * - Play Video interaction button
 * - Volume toggle for background video
 */
const HeroSection = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // TO USE YOUR OWN VIDEO:
  // 1. Put your video in: public/videos/hero-background.mp4
  // 2. Put your poster image in: public/videos/hero-poster.jpg
  // 3. Update the paths below:

  const backgroundAsset = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/72144296-88fa-4ff6-9ae2-096632439085-wix-com/assets/images/images_2.png";
  const videoAsset = "/videos/projects/Video1.mp4";

  // Example with local files (uncomment to use):
  // const backgroundAsset = "/videos/hero-poster.jpg";
  // const videoAsset = "/videos/hero-background.mp4";

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (!document.fullscreenElement) {
        videoRef.current.requestFullscreen().catch((err) => {
          console.log("Fullscreen error:", err);
        });
      } else {
        document.exitFullscreen();
      }
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-black flex flex-col items-center justify-center">
      {/* Background Media Container */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          poster={backgroundAsset}
        >
          <source src={videoAsset} type="video/mp4" />
        </video>
        {/* Dark Vignette Overlay */}
        <div
          className="absolute inset-0 bg-black/30 pointer-events-none"
          style={{
            boxShadow: "inset 0 0 150px rgba(0,0,0,0.5)"
          }}
        />
      </div>

      {/* Fullscreen/Maximize Button - Top Right */}
      <button
        onClick={toggleFullscreen}
        className="absolute top-8 right-8 z-20 p-3 rounded-full border border-white/50 text-white hover:bg-white/10 hover:border-white transition-all duration-300 group"
        aria-label="Fullscreen"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
        </svg>
      </button>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h1
          className="hero-heading text-white mb-6"
          style={{
            fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            lineHeight: "1.1",
          }}
        >
          LATEST WORK
        </h1>

        {/* Play Video Button */}
        <button
          className="group flex flex-col items-center gap-2 text-white transition-opacity duration-300 hover:opacity-70"
          onClick={() => setIsMuted(!isMuted)}
        >
          <div className="rounded-full border border-white p-3 mb-1 flex items-center justify-center">
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </div>
          <span
            className="italic font-light tracking-[0.15em] uppercase text-[13px]"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {isMuted ? "Unmute for Voice" : "Mute Sound"}
          </span>
        </button>
      </div>

      {/* Bottom CTA Button */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
        <a
          href="#all-videos"
          className="inline-block px-10 py-3 border border-white text-white italic text-[13px] tracking-[0.15em] transition-all duration-300 hover:bg-white hover:text-black"
          style={{
            borderRadius: "0px",
            fontFamily: "var(--font-sans)",
          }}
        >
          All Videos +
        </a>
      </div>
    </section>
  );
};

export default HeroSection;