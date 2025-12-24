import React from "react";
import { Instagram, Linkedin, Youtube, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 px-8 border-t border-white/10">
      <div className="container mx-auto max-w-[1200px] flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <svg
              viewBox="0 0 100 100"
              className="w-8 h-8 text-white"
              fill="none"
              stroke="white"
              strokeLinecap="round"
              strokeWidth="2.5"
            >
              <circle cx="50" cy="50" r="45" />
              <line x1="50" y1="5" x2="50" y2="95" />
              <line x1="5" y1="50" x2="95" y2="50" />
            </svg>
            <span className="font-logo text-[14px] tracking-[0.2em] font-normal uppercase">
              RANJIT.NAVALAN
            </span>
          </div>
          <p className="text-[12px] tracking-[0.1em] text-white/50 max-w-[300px] leading-relaxed mt-4">
            MNR Motion AI Advertising & Cinematic Brand Films - Creating compelling visual narratives through AI-powered advertising and cinematic storytelling.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12 md:gap-24">
          <div className="flex flex-col gap-4">
            <h4 className="text-[12px] tracking-[0.2em] font-bold text-white mb-2">PAGES</h4>
            <a href="#narrative" className="text-[12px] tracking-[0.15em] text-white/70 hover:text-white">NARRATIVE</a>
            <a href="#commercial" className="text-[12px] tracking-[0.15em] text-white/70 hover:text-white">COMMERCIAL</a>
            <a href="#music-videos" className="text-[12px] tracking-[0.15em] text-white/70 hover:text-white">MUSIC VIDEOS</a>
            <a href="#bio" className="text-[12px] tracking-[0.15em] text-white/70 hover:text-white">BIO</a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-[12px] tracking-[0.2em] font-bold text-white mb-2">SOCIAL</h4>
            <a href="https://www.instagram.com/ranjit_navalan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[12px] tracking-[0.15em] text-white/70 hover:text-white">
              <Instagram size={14} /> INSTAGRAM
            </a>
            <a href="https://www.linkedin.com/in/ranjit-navalan-183b2968" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[12px] tracking-[0.15em] text-white/70 hover:text-white">
              <Linkedin size={14} /> LINKEDIN
            </a>
            <a href="https://www.youtube.com/@MNRMotion" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[12px] tracking-[0.15em] text-white/70 hover:text-white">
              <Youtube size={14} /> YOUTUBE
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-[12px] tracking-[0.2em] font-bold text-white mb-2">NEWSLETTER</h4>
          <div className="flex border-b border-white pb-2 min-w-[250px]">
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="bg-transparent border-none text-[12px] tracking-[0.15em] focus:outline-none w-full"
            />
            <button className="text-[12px] tracking-[0.15em] hover:opacity-70">JOIN</button>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-[1200px] mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] tracking-[0.15em] text-white/30">
          © {new Date().getFullYear()} RANJIT NAVALAN - MNR MOTION. ALL RIGHTS RESERVED.
        </p>
        <p className="text-[10px] tracking-[0.15em] text-white/30">
          DEVELOPED BY RANJIT NAVALAN
        </p>
      </div>
    </footer>
  );
}
