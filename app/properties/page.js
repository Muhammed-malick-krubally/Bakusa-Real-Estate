'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';

// Example properties data
const properties = [
    { id: 1, title: 'Luxury Beachfront Villa', price: 10250000, location: 'Sanyang, The Gambia', type: 'sale', status: 'available', image: '/properties/featured_villa_1.jpg', description: 'An exquisite villa with stunning ocean views and private pool.' },
    { id: 2, title: 'Modern Penthouse Apartment', price: 12850000, location: 'Fajara, The Gambia', type: 'rent', status: 'rented', image: '/properties/featured_villa_2.jpg', description: 'A penthouse with panoramic skyline views and premium finishes.' },
    { id: 3, title: 'Premium Waterfront Estate', price: 22100000, location: 'SeneGambia, The Gambia', type: 'rent', status: 'available', image: '/properties/featured_villa_3.jpg', description: 'Exclusive estate with direct water access and lush gardens.' },
    { id: 4, title: 'Exclusive Golf Resort Home', price: 11750000, location: 'Jambanjerri, The Gambia', type: 'rent', status: 'sold', image: '/properties/featured_villa_4.jpg', description: 'Luxury home located in a gated golf community.' },
    { id: 5, title: 'Modern Villa', price: 2450000, location: 'Lamin, The Gambia', type: 'rent', status: 'available', image: '/properties/featured_villa_5.jpg', description: 'Luxury home located in a bustling community.' },
    { id: 6, title: "King's Palace", price: 45750000, location: 'Kanifing, The Gambia', type: 'sale', status: 'available', image: '/properties/featured_villa_6.jpg', description: 'Luxury home located in a modern commercial community.' },
    { id: 7, title: 'Standard House', price: 5950000, location: 'Abuko, The Gambia', type: 'rent', status: 'available', image: '/properties/featured_villa_7.jpg', description: 'Luxury home located in a standard peaceful community.' },
    { id: 8, title: 'Crystal Abode', price: 87000000, location: 'KobaKunda, The Gambia', type: 'sale', status: 'available', image: '/properties/featured_villa_8.jpg', description: 'Luxury home located in a well developed community.' },
    { id: 9, title: 'Original Haven', price: 5000000, location: 'Basse, The Gambia', type: 'rent', status: 'available', image: '/properties/featured_villa_9.jpg', description: 'Luxury home located in a business oriented community.' },
    { id: 10, title: "'Kerr bu Neh(beauiful house)'", price: 54850000, location: 'SeneGambia, The Gambia', type: 'sale', status: 'available', image: '/properties/featured_villa_10.jpg', description: 'Luxury home located in a luxury-centered community.' },
];

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

export default function Properties() {
    const [currentYear, setCurrentYear] = useState(0);
    const [filters, setFilters] = useState({ type: 'all', location: '', maxPrice: '' });
    const [filteredProperties, setFilteredProperties] = useState(properties);
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
        const allLocations = properties.map(p => p.location);
        setLocations([...new Set(allLocations)]);
    }, []);

    useEffect(() => {
        let results = properties;
        if (filters.type !== 'all') results = results.filter(p => p.type === filters.type);
        if (filters.location) results = results.filter(p => p.location === filters.location);
        if (filters.maxPrice) results = results.filter(p => p.price <= parseInt(filters.maxPrice));
        setFilteredProperties(results);
    }, [filters]);

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

            {/* Page Header */}
            <section className="py-8 sm:py-10 text-center px-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">Our Properties</h1>
                <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                    Explore our curated collection of luxury homes, villas, and estates in The Gambia.
                </p>
            </section>

            {/* Filters */}
            <section className="px-4 sm:px-6 pb-8 sm:pb-10">
                <div className="container mx-auto flex flex-col sm:flex-row flex-wrap gap-4 justify-center bg-white/5 p-4 sm:p-6 rounded-xl border border-white/10">
                    <select onChange={(e) => setFilters({ ...filters, type: e.target.value })} className="p-2 rounded bg-black/40 text-white border border-white/20">
                        <option value="all">All Types</option>
                        <option value="sale">For Sale</option>
                        <option value="rent">For Rent</option>
                    </select>

                    <select onChange={(e) => setFilters({ ...filters, location: e.target.value })} className="p-2 rounded bg-black/40 text-white border border-white/20">
                        <option value="">All Locations</option>
                        {locations.map(loc => (
                            <option key={loc} value={loc}>{loc}</option>
                        ))}
                    </select>

                    <select onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })} className="p-2 rounded bg-black/40 text-white border border-white/20">
                        <option value="">No Max</option>
                        <option value="2000000">D0 - D2,000,000</option>
                        <option value="5000000">D2,000,000 - D5,000,000</option>
                        <option value="10000000">D5,000,000 - D10,000,000</option>
                        <option value="50000000">D10,000,000 - D50,000,000</option>
                        <option value="100000000">D50,000,000 - D100,000,000</option>
                    </select>
                </div>
            </section>

            {/* Property Grid */}
            <section className="px-4 sm:px-6 pb-16 sm:pb-20">
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
                    {filteredProperties.length > 0 ? (
                        filteredProperties.map((property) => (
                            <div key={property.id} className={`relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 group ${property.status !== 'available' ? 'opacity-50' : ''}`}>
                                {/* Number Badge */}
                                <div className="absolute top-2 right-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold px-3 py-1 rounded-full shadow-lg z-10">
                                    #{property.id}
                                </div>

                                {/* Status Badge */}
                                {property.status !== 'available' && (
                                    <div className="absolute top-2 left-2 bg-red-600 text-white font-bold px-3 py-1 rounded-full z-10">
                                        {property.status === 'sold' ? 'SOLD OUT' : 'RENTED OUT'}
                                    </div>
                                )}

                                {/* Image */}
                                <div className="h-64 sm:h-72 md:h-64 relative overflow-hidden">
                                    <img src={property.image} alt={property.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                                </div>

                                {/* Details */}
                                <div className="p-4 sm:p-6">
                                    <h3 className="text-white font-semibold text-lg sm:text-xl mb-1 sm:mb-2">{property.title}</h3>
                                    <p className="text-cyan-400 font-bold text-base sm:text-lg mb-1 sm:mb-2">D{property.price.toLocaleString()}</p>
                                    <p className="text-white/70 mb-2 sm:mb-4 text-sm sm:text-base">{property.location}</p>
                                    <p className="text-white/60 text-xs sm:text-sm mb-2 sm:mb-4">{property.description}</p>

                                    <Link href={`/properties/${property.id}`} className="w-full inline-block py-2 sm:py-2.5 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg text-center transition-transform hover:scale-105">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-white/70 col-span-full text-center">No properties match your filters.</p>
                    )}
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
