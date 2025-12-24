import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import Image from "next/image";

export default function BioPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Header />

            {/* Bio Section */}
            <section className="min-h-screen py-20 px-8 flex items-center justify-center">
                <div className="container mx-auto max-w-[1000px]">
                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* Photo Section */}
                        <div className="relative aspect-square w-full max-w-[500px] mx-auto overflow-hidden">
                            <Image
                                src="/images/ranjit-photo.jpeg"
                                alt="Ranjit Navalan"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Bio Content */}
                        <div className="space-y-6">
                            <div>
                                <h1
                                    className="text-white font-bold tracking-[0.2em] uppercase mb-2"
                                    style={{
                                        fontSize: 'clamp(2rem, 5vw, 3rem)',
                                        fontFamily: 'Inter, sans-serif',
                                    }}
                                >
                                    Ranjit Navalan
                                </h1>
                                <p className="text-white/50 text-sm tracking-[0.3em] uppercase">
                                    Filmmaker & Creative Director
                                </p>
                            </div>

                            <div className="h-[1px] bg-white/10 w-full"></div>

                            {/* Bio Description - CUSTOMIZE THIS */}
                            <div className="space-y-4 text-white/70 leading-relaxed">
                                <p className="text-[15px]">
                                    Creative filmmaker and director specializing in AI-powered advertising
                                    and cinematic brand films. Founder of MNR Motion, bringing innovative
                                    visual storytelling to life through cutting-edge technology.
                                </p>

                                <p className="text-[15px]">
                                    With a passion for merging artificial intelligence with traditional
                                    filmmaking, I create compelling narratives that resonate with modern
                                    audiences. From commercial projects to music videos, each piece is
                                    crafted with meticulous attention to detail and creative vision.
                                </p>

                                <p className="text-[15px]">
                                    Based in Chennai, working globally with brands and artists
                                    who dare to push creative boundaries.
                                </p>
                            </div>

                            <div className="h-[1px] bg-white/10 w-full"></div>

                            {/* Stats or Highlights */}
                            <div className="grid grid-cols-3 gap-6 pt-4">
                                <div>
                                    <p className="text-3xl font-bold text-white">10+</p>
                                    <p className="text-xs text-white/50 tracking-[0.2em] uppercase mt-1">Projects</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-white">1+</p>
                                    <p className="text-xs text-white/50 tracking-[0.2em] uppercase mt-1">Year</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-white">10+</p>
                                    <p className="text-xs text-white/50 tracking-[0.2em] uppercase mt-1">Clients</p>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div className="pt-6">
                                <a
                                    href="#contact"
                                    className="inline-block px-8 py-3 border border-white text-white text-[13px] tracking-[0.15em] uppercase transition-all duration-300 hover:bg-white hover:text-black"
                                >
                                    Get In Touch
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
