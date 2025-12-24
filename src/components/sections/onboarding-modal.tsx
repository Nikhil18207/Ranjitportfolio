"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

/**
 * OnboardingModal Component
 * 
 * Clones the Wix-style onboarding lightbox/modal.
 * Featured text: "Use this template as a starting point"
 * Includes an illustration and the blue "Edit This Site" button.
 */
export default function OnboardingModal() {
  const [isOpen, setIsOpen] = useState(false);

  // Automatically show the modal after a short delay to match the common behavior of template previews
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  const handleClose = () => setIsOpen(false);

  return (
    <div 
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/40 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative w-[380px] bg-white text-[#20303c] shadow-[0_20px_50px_rgba(0,0,0,0.3)] animate-in fade-in zoom-in duration-300 pointer-events-auto"
        style={{ borderRadius: "0px" }}
      >
        {/* Close Button Icon */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 p-1 hover:opacity-70 transition-opacity"
          aria-label="close"
        >
          <img 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/72144296-88fa-4ff6-9ae2-096632439085-wix-com/assets/icons/53d18152-2a6c-49d6-9c36-3e0ba63fcce9-1.png" 
            alt="Close" 
            className="w-4 h-4 object-contain"
          />
        </button>

        <div className="flex flex-col items-center text-center p-8 pt-10">
          {/* Main Content */}
          <h2 
            className="text-[22px] leading-[1.3] font-light mb-2 text-[#20303c] normal-case tracking-tight"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Use this template as a starting point
          </h2>
          
          <p className="text-[14px] leading-[1.5] text-[#20303c] font-light mb-8 max-w-[280px]">
            Change anything you want to make this your website.
          </p>

          {/* Illustration Asset */}
          <div className="mb-10 w-full flex justify-center">
            <img 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/72144296-88fa-4ff6-9ae2-096632439085-wix-com/assets/images/6b32a101-4078-4c4a-9c84-c55c222d2a54-1.png" 
              alt="Website building illustration" 
              className="w-[180px] h-auto pointer-events-none"
            />
          </div>

          {/* Action Button */}
          <a 
            href="#"
            className="w-full bg-[#3899ec] hover:bg-[#2e7ec4] text-white py-[14px] px-6 text-[15px] font-normal transition-colors duration-200 block"
            style={{ borderRadius: "0px" }}
          >
            Edit This Site
          </a>
        </div>
      </div>
    </div>
  );
}