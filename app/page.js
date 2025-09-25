'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const properties = [
  { id: 1, title: 'Luxury Beachfront Villa', price: '$10,250,000', location: 'Sanyang, The Gambia', type: 'sale', image: '/properties/featured_villa_1.jpg' },
  { id: 2, title: 'Modern Penthouse Apartment', price: '$12,850,000', location: 'Fajara, The Gambia', type: 'rent', image: '/properties/featured_villa_2.jpg' },
  { id: 3, title: 'Premium Waterfront Estate', price: '$22,100,000', location: 'SeneGambia, The Gambia', type: 'rent', image: '/properties/featured_villa_3.jpg' },
  { id: 4, title: 'Exclusive Golf Resort Home', price: '$11,750,000', location: 'Jambanjerri, The Gambia', type: 'sale', image: '/properties/featured_villa_4.jpg' },
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

export default function Home() {
  const [currentYear, setCurrentYear] = useState(0);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

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

      {/* Hero Section */}
      <section className="relative h-[80vh] sm:h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/40 to-cyan-600/20"></div>

        {/* Floating elements */}
        <div className="absolute top-20 left-5 sm:left-20 w-60 sm:w-72 h-60 sm:h-72 bg-purple-500/10 rounded-full filter blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-5 sm:right-20 w-80 sm:w-96 h-80 sm:h-96 bg-cyan-500/10 rounded-full filter blur-xl animate-float animation-delay-2000"></div>

        <div className="relative z-10 text-center max-w-4xl">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Find Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Dream Home
            </span>{' '}
            in The Gambia
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Bakusa Real Estate offers premium luxury properties in the most sought-after locations of The Gambia. Experience unparalleled service and find your perfect sanctuary.
          </p>
          <Link
            href="/properties"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105"
          >
            Explore Properties
          </Link>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">Featured Properties</h2>
            <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base">
              Discover our handpicked selection of exclusive properties in prime locations throughout The Gambia.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {properties.map((property) => (
              <div
                key={property.id}
                className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 group"
              >
                <div className="h-56 sm:h-64 md:h-56 relative overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-white font-semibold text-lg sm:text-xl mb-1 sm:mb-2">{property.title}</h3>
                  <p className="text-cyan-400 font-bold text-xl mb-1 sm:mb-2">{property.price}</p>
                  <p className="text-white/70 text-sm sm:text-base">{property.location}</p>
                  <Link
                    href={`/properties/${property.id}`}
                    className="mt-4 w-full inline-block py-2 sm:py-3 bg-white/10 text-white rounded-lg transition-colors hover:bg-white/20 text-sm sm:text-base text-center"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-3xl p-8 sm:p-12 text-center border border-white/10 backdrop-blur-md">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">Ready to Find Your Dream Home?</h2>
          <p className="text-white/80 mb-6 sm:mb-8 text-sm sm:text-base">
            Browse our complete collection of luxury properties in The Gambia and discover the perfect home that matches your lifestyle.
          </p>
          <Link
            href="/properties"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105"
          >
            View All Properties
          </Link>
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

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .animate-float { animation: float 10s ease-in-out infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </div>
  );
}
