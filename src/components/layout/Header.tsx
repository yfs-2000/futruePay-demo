import logoPng from '@/assets/logo.png';
import logoDarkPng from '@/assets/logo_dark.png';
import { Button } from '@/components/ui/button';
import { ArrowRight, Menu, X } from 'lucide-react';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import { useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50);
  });

  const navItems = [
    {
      label: '产品',
    },
    {
      label: '解决方案',
    },
    {
      label: '定价方案',
    },
    {
      label: 'API参考',
    },
    {
      label: '关于我们',
    },
  ];

  return (
    <motion.header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-gray-100 bg-white/80 shadow-sm backdrop-blur-md'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <a
          href="/"
          className={`flex items-center gap-2 text-2xl font-bold tracking-tighter transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}
        >
          <img {...(isScrolled ? logoDarkPng : logoPng)} alt="logo" className="w-[156px]" />
        </a>
        <nav className="hidden items-center space-x-10 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={`#${item.label.toLowerCase()}`}
              className={`text-base font-medium transition-colors ${isScrolled ? 'text-gray-600 hover:text-black' : 'text-white hover:text-white/70'}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center space-x-4 md:flex">
          <Button variant="link" className={`${isScrolled ? 'text-gray-700' : 'text-white'}`}>
            注册
          </Button>
          <Button className="w-[84px] rounded-full font-bold">
            登录
            <ArrowRight />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="p-2 text-black md:hidden"
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
          className="overflow-hidden border-t border-gray-100 bg-white/95 shadow-lg backdrop-blur-xl md:hidden"
        >
          <div className="container mx-auto flex flex-col space-y-4 px-4 py-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={`#${item.label.toLowerCase()}`}
                className="py-2 text-lg font-medium text-gray-600 hover:text-black"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col space-y-4 border-t border-gray-100 pt-6">
              <Button
                variant="ghost"
                className="h-12 w-full justify-start text-lg text-gray-700 hover:bg-black/5"
              >
                注册
              </Button>
              <Button className="h-12 w-full rounded-full bg-blue-600 text-lg font-medium text-white hover:bg-blue-700">
                登录
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
