import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MobileMenu } from './components/MobileMenu';
import { BackgroundVideo } from './components/BackgroundVideo';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <BackgroundVideo />

      <div className="min-h-screen flex flex-col relative">
        <Header />
        <Hero />

        {/* Bottom CTA Section */}
        <div className="mt-auto px-6 pb-8">
          <p className="text-center mb-8 px-4">
            WE STUDY THE NATURE OF BUSINESS, CREATING A COMFORTABLE ENVIRONMENT FOR GROWTH.
          </p>

          <div className="flex gap-4 mb-6">
            <button className="flex-1 bg-black text-white py-4 px-6 hover:bg-gray-800 transition-colors">
              Get Branded
            </button>
            <button className="flex-1 bg-black text-white py-4 px-6 hover:bg-gray-800 transition-colors">
              Book Now
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-full flex justify-center py-4"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </>
  );
}
