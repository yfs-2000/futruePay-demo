import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <a href="/" className={`text-2xl font-bold tracking-tighter flex items-center gap-2 transition-colors ${isScrolled ? 'text-black' : 'text-black'}`}>
          {/* You can add a logo icon here if you have one */}
          FuturePay
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {['Products', 'Solutions', 'Developers', 'Company'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-medium transition-colors ${isScrolled ? 'text-gray-600 hover:text-black' : 'text-gray-600 hover:text-black'}`}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className={`hover:bg-black/5 ${isScrolled ? 'text-gray-700' : 'text-gray-700'}`}>
            Log In
          </Button>
          <Button className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-6 font-medium border-none">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 overflow-hidden shadow-lg"
        >
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
             {['Products', 'Solutions', 'Developers', 'Company'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg text-gray-600 hover:text-black py-2 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="pt-6 flex flex-col space-y-4 border-t border-gray-100 mt-2">
               <Button variant="ghost" className="text-gray-700 justify-start hover:bg-black/5 w-full text-lg h-12">
                Log In
              </Button>
              <Button className="bg-blue-600 text-white w-full rounded-full text-lg h-12 font-medium hover:bg-blue-700">
                Get Started
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

