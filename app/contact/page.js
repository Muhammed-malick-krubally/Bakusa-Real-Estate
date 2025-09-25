'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

function NavLink({ href, label }) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`transition-colors ${isActive ? 'text-cyan-400 font-bold' : 'text-white/90 hover:text-white'}`}
        >
            {label}
        </Link>
    );
}

export default function Contact() {
    const [currentYear, setCurrentYear] = useState(0);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted! (This is just a placeholder for now.)');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-black/30 backdrop-blur-lg border-b border-white/10">
                <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
                    <div className="text-white text-2xl font-bold">Bakusa Real Estate</div>
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
                        <NavLink href="/" label="Home" />
                        <NavLink href="/properties" label="Properties" />
                        <NavLink href="/contact" label="Contact" />
                    </div>
                </div>
            </nav>

            {/* Contact Header */}
            <section className="py-16 sm:py-20 text-center px-4">
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 sm:mb-6">Contact Us</h1>
                <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base">
                    Have questions or want to discuss a property? Fill out the form below or reach out via our social media.
                </p>
            </section>

            {/* Contact Form & Socials */}
            <section className="px-4 sm:px-6 pb-16 sm:pb-20">
                <div className="container mx-auto max-w-3xl bg-white/5 p-6 sm:p-10 rounded-3xl border border-white/10 backdrop-blur-md">
                    {/* Form */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-6">
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="p-3 sm:p-4 rounded-lg bg-black/40 text-white border border-white/20"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="p-3 sm:p-4 rounded-lg bg-black/40 text-white border border-white/20"
                            required
                        />
                        <textarea
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="p-3 sm:p-4 rounded-lg bg-black/40 text-white border border-white/20"
                            rows={5}
                            required
                        />
                        <button
                            type="submit"
                            className="py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Social Links */}
                    <div className="mt-8 sm:mt-10 flex justify-center gap-6 sm:gap-8 text-white text-xl sm:text-2xl">
                        <button title="Facebook"><FaFacebookF /></button>
                        <button title="Twitter"><FaTwitter /></button>
                        <button title="Instagram"><FaInstagram /></button>
                        <button title="Whatsapp"><FaWhatsapp /></button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black/50 border-t border-white/10 py-6 sm:py-8">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-white/70 text-sm sm:text-base">
                        © {currentYear} Bakusa Real Estate — Abuko, The Gambia. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
