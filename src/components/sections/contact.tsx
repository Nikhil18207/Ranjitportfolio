"use client";

import React, { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Create mailto link with form data
        const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        window.location.href = `mailto:proalphagen@gmail.com?subject=${subject}&body=${body}`;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section id="contact" className="bg-black text-white py-20 px-8">
            <div className="container mx-auto max-w-[1200px]">
                <div className="grid md:grid-cols-2 gap-16">

                    {/* Left Side - Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h2
                                className="text-white font-bold tracking-[0.2em] uppercase mb-4"
                                style={{
                                    fontSize: 'clamp(2rem, 5vw, 3rem)',
                                    fontFamily: 'Inter, sans-serif',
                                }}
                            >
                                Let's Create
                            </h2>
                            <p className="text-white/70 text-[15px] leading-relaxed max-w-[400px]">
                                Have a project in mind? Whether it's a commercial, brand film, or AI-powered
                                creative work, let's bring your vision to life.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div className="mt-1">
                                    <Mail className="w-5 h-5 text-white/50" />
                                </div>
                                <div>
                                    <p className="text-[11px] tracking-[0.2em] uppercase text-white/50 mb-1">Email</p>
                                    <a
                                        href="mailto:proalphagen@gmail.com"
                                        className="text-[15px] text-white hover:text-white/70 transition-colors"
                                    >
                                        proalphagen@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-start gap-4">
                                <div className="mt-1">
                                    <MapPin className="w-5 h-5 text-white/50" />
                                </div>
                                <div>
                                    <p className="text-[11px] tracking-[0.2em] uppercase text-white/50 mb-1">Location</p>
                                    <p className="text-[15px] text-white">Chennai, India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="YOUR NAME"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-transparent border-b border-white/20 pb-3 text-[13px] tracking-[0.15em] uppercase focus:outline-none focus:border-white transition-colors text-white placeholder:text-white/40"
                                />
                            </div>

                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="YOUR EMAIL"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-transparent border-b border-white/20 pb-3 text-[13px] tracking-[0.15em] uppercase focus:outline-none focus:border-white transition-colors text-white placeholder:text-white/40"
                                />
                            </div>

                            <div>
                                <textarea
                                    name="message"
                                    placeholder="YOUR MESSAGE"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full bg-transparent border-b border-white/20 pb-3 text-[13px] tracking-[0.15em] uppercase focus:outline-none focus:border-white transition-colors resize-none text-white placeholder:text-white/40"
                                />
                            </div>

                            <button
                                type="submit"
                                className="group flex items-center gap-3 px-8 py-3 border border-white text-white text-[13px] tracking-[0.15em] uppercase transition-all duration-300 hover:bg-white hover:text-black"
                            >
                                <span>Send Message</span>
                                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
