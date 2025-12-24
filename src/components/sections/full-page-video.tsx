"use client";

import React, { useRef, useEffect, useState } from "react";

interface VideoSectionProps {
    videoUrl: string;
    title: string;
    category: string;
    index: number;
}

const FullPageVideoSection = ({ videoUrl, title, category, index }: VideoSectionProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);

    useEffect(() => {
        const video = videoRef.current;
        const section = sectionRef.current;

        if (!video || !section) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Video is in view - play it
                        video.play().catch(() => {
                            // Autoplay might be blocked, that's okay
                        });
                        setIsPlaying(true);
                    } else {
                        // Video is out of view - pause it AND mute it
                        video.pause();
                        video.muted = true;
                        setIsPlaying(false);
                        setIsMuted(true); // Reset mute state
                    }
                });
            },
            {
                threshold: 0.5, // Play when 50% visible
            }
        );

        observer.observe(section);

        return () => {
            observer.disconnect();
        };
    }, []);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

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
        <section
            ref={sectionRef}
            id={`video-${index}`}
            className="relative w-full h-screen min-h-[600px] overflow-hidden bg-black flex flex-col items-center justify-center snap-start snap-always"
        >
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    ref={videoRef}
                    loop
                    muted={isMuted}
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                >
                    <source src={videoUrl} type="video/mp4" />
                </video>
                {/* Dark Vignette Overlay */}
                <div
                    className="absolute inset-0 bg-black/30 pointer-events-none"
                    style={{
                        boxShadow: "inset 0 0 150px rgba(0,0,0,0.5)",
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

            {/* Content Overlay */}
            <div className="relative z-10 flex flex-col items-center text-center px-4">
                <span className="text-[12px] tracking-[0.3em] font-light mb-4 text-white/70 uppercase">
                    {category}
                </span>
                <h2
                    className="text-white mb-6"
                    style={{
                        fontSize: "clamp(2rem, 6vw, 3.5rem)",
                        fontWeight: 700,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        lineHeight: "1.1",
                    }}
                >
                    {title}
                </h2>

                {/* Mute/Unmute Button */}
                <button
                    className="group flex flex-col items-center gap-2 text-white transition-opacity duration-300 hover:opacity-70"
                    onClick={toggleMute}
                >
                    <div className="rounded-full border border-white p-3 mb-1 flex items-center justify-center">
                        {isMuted ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                            </svg>
                        )}
                    </div>
                    <span
                        className="italic font-light tracking-[0.15em] uppercase text-[13px]"
                        style={{ fontFamily: "var(--font-sans)" }}
                    >
                        {isMuted ? "Unmute Sound" : "Mute Sound"}
                    </span>
                </button>
            </div>

            {/* Scroll Indicator (only on first video) */}
            {index === 1 && (
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
                    <span className="text-white/50 text-[11px] tracking-[0.2em] uppercase">Scroll Down</span>
                    <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            )}
        </section>
    );
};

export default FullPageVideoSection;
