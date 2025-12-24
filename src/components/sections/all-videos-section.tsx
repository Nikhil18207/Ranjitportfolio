"use client";

import React from "react";
import FullPageVideoSection from "./full-page-video";

// Video data - Starts from Video2 (Video1 is in hero section)
const videos = [
    {
        videoUrl: "/videos/projects/Video2.mp4",
        title: "BABA JEERA RICE",
        category: "COMMERCIAL",
    },
    {
        videoUrl: "/videos/projects/Video3.mp4",
        title: "GARUDA INTELLIGENCE",
        category: "BRAND FILM",
    },
    {
        videoUrl: "/videos/projects/Video4.mp4",
        title: "ALPHA.IN",
        category: "AI ADVERTISING",
    },
    {
        videoUrl: "/videos/projects/Video5.mp4",
        title: "LIFECYCLE OF A BUTTERFLY",
        category: "CINEMATIC",
    },
    {
        videoUrl: "/videos/projects/Video6.mp4",
        title: "ETHIRVEETU KADHAL",
        category: "AI MUSIC VIDEO",
    },
];

const AllVideosSection = () => {
    return (
        <div
            id="all-videos"
            className="snap-y snap-mandatory h-screen overflow-y-scroll"
            style={{
                scrollBehavior: "smooth",
            }}
        >
            {videos.map((video, index) => (
                <FullPageVideoSection
                    key={index}
                    videoUrl={video.videoUrl}
                    title={video.title}
                    category={video.category}
                    index={index + 1}
                />
            ))}
        </div>
    );
};

export default AllVideosSection;
