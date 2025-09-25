'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Sample properties array
const properties = [
    {
        id: 1,
        title: 'Luxury Beachfront Villa',
        price: 10250000,
        location: 'Sanyang, The Gambia',
        type: 'sale',
        status: 'available',
        images: [
            '/properties/featured_villa_1.jpg',
            '/properties/villa_1_interior_1.jpg',
            '/properties/villa_1_interior_2.jpg',
            '/properties/villa_1_interior_3.jpg',
        ],
        description: 'An exquisite villa with stunning ocean views and private pool.'
    },
    {
        id: 2,
        title: 'Modern Penthouse Apartment',
        price: 12850000,
        location: 'Fajara, The Gambia',
        type: 'rent',
        status: 'rented',
        images: [
            '/properties/featured_villa_2.jpg',
            '/properties/villa_2_interior_1.jpg',
            '/properties/villa_2_interior_2.jpg',
            '/properties/villa_2_interior_3.jpg',
        ],
        description: 'A penthouse with panoramic skyline views and premium finishes.'
    },
    {
        id: 3,
        title: 'Premium Waterfront Estate',
        price: 22100000,
        location: 'SeneGambia, The Gambia',
        type: 'rent',
        status: 'available',
        images: [
            '/properties/featured_villa_3.jpg',
            '/properties/villa_3_interior_1.jpg',
            '/properties/villa_3_interior_2.jpg',
            '/properties/villa_3_interior_3.jpg',
        ],
        description: 'Exclusive estate with direct water access and lush gardens.'
    },
    {
        id: 4,
        title: 'Exclusive Golf Resort Home',
        price: 11750000,
        location: 'Jambanjerri, The Gambia',
        type: 'sale',
        status: 'sold',
        images: [
            '/properties/featured_villa_4.jpg',
            '/properties/villa_4_interior_1.jpg',
            '/properties/villa_4_interior_2.jpg',
        ],
        description: 'Luxury home located in a gated golf community.'
    },
    {
        id: 5,
        title: 'Modern Family House',
        price: 9500000,
        location: 'Abuko, The Gambia',
        type: 'sale',
        status: 'available',
        images: [
            '/properties/featured_villa_5.jpg',
            '/properties/villa_5_interior_1.jpg',
            '/properties/villa_5_interior_2.jpg',
        ],
        description: 'Comfortable family home with modern amenities.'
    },
    {
        id: 6,
        title: 'Luxury Apartment',
        price: 13500000,
        location: 'Fajara, The Gambia',
        type: 'rent',
        status: 'available',
        images: [
            '/properties/featured_villa_6.jpg',
            '/properties/villa_6_interior_1.jpg',
            '/properties/villa_6_interior_2.jpg',
        ],
        description: 'Spacious apartment with excellent views and finishes.'
    },
    {
        id: 7,
        title: 'Seaside Cottage',
        price: 8200000,
        location: 'Sanyang, The Gambia',
        type: 'sale',
        status: 'available',
        images: [
            '/properties/featured_villa_7.jpg',
            '/properties/villa_7_interior_1.jpg',
            '/properties/villa_7_interior_2.jpg',
        ],
        description: 'Charming cottage near the beach with cozy interiors.'
    },
    {
        id: 8,
        title: 'Modern Villa',
        price: 17800000,
        location: 'Serrekunda, The Gambia',
        type: 'sale',
        status: 'available',
        images: [
            '/properties/featured_villa_8.jpg',
            '/properties/villa_8_interior_1.jpg',
            '/properties/villa_8_interior_2.jpg',
        ],
        description: 'A modern villa with luxury finishes and landscaped garden.'
    },
    {
        id: 9,
        title: 'Urban Apartment',
        price: 11250000,
        location: 'Farato, The Gambia',
        type: 'rent',
        status: 'available',
        images: [
            '/properties/featured_villa_9.jpg',
            '/properties/villa_9_interior_1.jpg',
            '/properties/villa_9_interior_2.jpg',
        ],
        description: 'Central apartment with access to all amenities.'
    },
    {
        id: 10,
        title: 'Exclusive Estate',
        price: 24250000,
        location: 'SeneGambia, The Gambia',
        type: 'sale',
        status: 'available',
        images: [
            '/properties/featured_villa_10.jpg',
            '/properties/villa_10_interior_1.jpg',
            '/properties/villa_10_interior_2.jpg',
        ],
        description: 'A top-tier estate with private gardens and water features.'
    },
];

export default function PropertyDetail({ params }) {
    const [mounted, setMounted] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const propertyId = parseInt(params.id);
    const property = properties.find(p => p.id === propertyId);

    if (!property) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
                <p>Property not found.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">

            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-black/30 backdrop-blur-lg border-b border-white/10">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="text-white text-2xl font-bold">Bakusa Real Estate</div>
                    <div className="flex space-x-8">
                        <Link href="/" className="text-white/90 hover:text-white transition-colors">Home</Link>
                        <Link href="/properties" className="text-cyan-400 font-bold">Properties</Link>
                        <Link href="/contact" className="text-white/90 hover:text-white transition-colors">Contact</Link>
                    </div>
                </div>
            </nav>

            {/* Property Section */}
            <section className="container mx-auto py-12 px-6">
                <div className={`relative ${property.status !== 'available' ? 'opacity-50' : ''}`}>

                    {/* Back Button */}
                    <Link
                        href="/properties"
                        className="absolute top-4 left-4 bg-red-600 hover:bg-red-700 text-white text-xl font-bold w-10 h-10 flex items-center justify-center rounded-full shadow-lg z-20 transition-all"
                    >
                        ✕
                    </Link>

                    {/* Property Number Badge */}
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold px-4 py-2 rounded-full shadow-lg z-10">
                        #{property.id}
                    </div>

                    {/* Status Badge */}
                    {property.status !== 'available' && (
                        <div className="absolute top-4 right-24 bg-red-600 text-white font-bold px-4 py-2 rounded-full z-10">
                            {property.status === 'sold' ? 'SOLD OUT' : 'RENTED OUT'}
                        </div>
                    )}

                    {/* Images Carousel */}
                    <div className="mb-6 relative">
                        <img
                            src={property.images[currentImage]}
                            alt={property.title}
                            className="w-full h-80 sm:h-96 md:h-[500px] object-cover rounded-2xl transition-all"
                        />

                        {property.images.length > 1 && (
                            <>
                                <button
                                    onClick={() => setCurrentImage((currentImage - 1 + property.images.length) % property.images.length)}
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white text-3xl font-bold px-4 py-2 rounded-full transition-all shadow-lg sm:px-5 sm:py-3"
                                >
                                    ‹
                                </button>
                                <button
                                    onClick={() => setCurrentImage((currentImage + 1) % property.images.length)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white text-3xl font-bold px-4 py-2 rounded-full transition-all shadow-lg sm:px-5 sm:py-3"
                                >
                                    ›
                                </button>
                            </>
                        )}
                    </div>

                    {/* Property Details */}
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 sm:p-8 md:flex md:flex-col md:gap-4">
                        <h1 className="text-3xl sm:text-4xl font-bold mb-2">{property.title}</h1>
                        <p className="text-cyan-400 font-bold text-xl sm:text-2xl mb-2">D{property.price.toLocaleString()}</p>
                        <p className="text-white/70 mb-2"><strong>Location:</strong> {property.location}</p>
                        <p className="text-white/70 mb-2"><strong>Type:</strong> {property.type === 'sale' ? 'For Sale' : 'For Rent'}</p>
                        <p className="text-white/60 mb-4">{property.description}</p>

                        <Link
                            href="/contact"
                            className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:scale-105 transition-all"
                        >
                            Contact Us About This Property
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
