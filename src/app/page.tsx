import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import BioPreview from "@/components/sections/bio-preview";
import VideoGrid from "@/components/sections/video-grid";
import Footer from "@/components/sections/footer";
import AllVideosSection from "@/components/sections/all-videos-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <AllVideosSection />
      <BioPreview />
      <VideoGrid />
      <Footer />
    </main>
  );
}
