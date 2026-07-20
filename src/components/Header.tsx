'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Our Menu' },
  { href: '/experience', label: 'Our Story' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-charcoal/95 shadow-lg shadow-black/50' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-ember flex items-center justify-center transition-all duration-300 group-hover:bg-amber-400">
              <svg viewBox="0 0 40 40" className="w-6 h-6 text-charcoal" fill="currentColor">
                <path d="M20 4C11.163 4 4 11.163 4 20s7.163 16 16 16 16-7.163 16-16S28.837 4 20 4zm0 2c7.732 0 14 6.268 14 14s-6.268 14-14 14S6 27.732 6 20 12.268 6 20 6z"/>
                <path d="M14 15c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm8 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm-7 7c0 2.76 2.24 5 5 5s5-2.24 5-5H15z"/>
              </svg>
            </div>
            <div>
              <div className="font-oswald text-washi text-lg font-bold tracking-wider leading-tight">BONDI CAFE</div>
              <div className="font-open-sans text-ember text-xs tracking-widest uppercase">Bondi Beach</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-underline font-oswald text-sm tracking-widest uppercase transition-colors duration-200 ${
                  pathname === link.href ? 'text-ember active' : 'text-washi/80 hover:text-ember'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.ubereats.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs px-5 py-2"
            >
              Order Now
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden relative z-50 flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-washi transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-washi transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-washi transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-charcoal/98 border-t border-ember/20 px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-oswald text-base tracking-widest uppercase py-2 border-b border-ink ${
                pathname === link.href ? 'text-ember' : 'text-washi/80'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-2">
            <a
              href="https://www.ubereats.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center"
            >
              Order on Uber Eats
            </a>
            <a
              href="https://www.doordash.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-center"
            >
              Order on DoorDash
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
