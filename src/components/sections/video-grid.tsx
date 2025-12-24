import React from "react";
import Image from "next/image";

interface VideoItem {
  title: string;
  category: string;
  image: string;
}

const videos: VideoItem[] = [
  {
    title: "THE SILENCE",
    category: "NARRATIVE",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "URBAN BEAT",
    category: "COMMERCIAL",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "ECHOES",
    category: "MUSIC VIDEO",
    image: "https://images.unsplash.com/photo-1514525253344-99a42999d22f?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "STREET LIFE",
    category: "COMMERCIAL",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "WILDERNESS",
    category: "NARRATIVE",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "NEON NIGHTS",
    category: "MUSIC VIDEO",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800",
  },
];

export default function VideoGrid() {
  return (
    <section className="bg-black py-20 px-8">
      <div className="container mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div key={index} className="group relative aspect-video overflow-hidden cursor-pointer">
              <Image
                src={video.image}
                alt={video.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[12px] tracking-[0.2em] font-light mb-2">{video.category}</span>
                <h3 className="text-xl font-bold tracking-[0.1em]">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
