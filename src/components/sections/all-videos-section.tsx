"use client";

import React from "react";
import FullPageVideoSection from "./full-page-video";

// Video data - you can easily add more videos here
const videos = [
    {
        videoUrl: "/videos/projects/Video1.mp4",
        title: "PROJECT ONE",
        category: "CINEMATIC",
    },
    {
        videoUrl: "/videos/projects/Video2.mp4",
        title: "PROJECT TWO",
        category: "COMMERCIAL",
    },
    {
        videoUrl: "/videos/projects/Video3.mp4",
        title: "PROJECT THREE",
        category: "BRAND FILM",
    },
    {
        videoUrl: "/videos/projects/Video4.mp4",
        title: "PROJECT FOUR",
        category: "AI ADVERTISING",
    },
    {
        videoUrl: "/videos/projects/Video5.mp4",
        title: "PROJECT FIVE",
        category: "SHOWREEL",
    },
    {
        videoUrl: "/videos/projects/Video6.mp4",
        title: "PROJECT SIX",
        category: "MOTION GRAPHICS",
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
