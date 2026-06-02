import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from "react-router";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const servicesDropdownRef = useRef(null);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // FIXED: This function now handles Home page correctly
  const isActive = (path) => {
    if (path === "/home") {
      // Home page is active when URL is either "/" or "/home"
      return location.pathname === "/home" || location.pathname === "/";
    }
    return location.pathname === path;
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(e.target)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(e.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (hamburgerRef.current) {
      const spans = hamburgerRef.current.querySelectorAll('span');
      if (isMobileMenuOpen) {
        spans[0].style.transform = 'translateY(6.5px) rotate(45deg)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'translateY(-6.5px) rotate(-45deg)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 h-16 border-b border-white/10 backdrop-blur-md bg-black/90">
        <Link to="/home" className="font-['Bebas_Neue'] text-2xl tracking-wider text-white">
          TREND<span className="text-[#E85C2A]">OX</span>
        </Link>
        
        <ul className="hidden lg:flex items-center gap-0 h-full">
          {/* Home */}
          <li>
            <Link 
              to="/home" 
              className={`px-5 h-full flex items-center text-sm transition-colors ${
                isActive("/home") 
                  ? 'text-[#FF8A5B] relative after:absolute after:bottom-0 after:left-5 after:right-5 after:h-0.5 after:bg-[#E85C2A]' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Home
            </Link>
          </li>
          
          {/* About */}
          <li>
            <Link 
              to="/about" 
              className={`px-5 h-full flex items-center text-sm transition-colors ${
                isActive("/about") 
                  ? 'text-[#FF8A5B] relative after:absolute after:bottom-0 after:left-5 after:right-5 after:h-0.5 after:bg-[#E85C2A]' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              About
            </Link>
          </li>
          
          {/* Services Dropdown */}
          <li className="relative" ref={servicesDropdownRef}>
            <button 
              onMouseEnter={() => setIsServicesOpen(true)}
              className="px-5 h-full flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
            >
              Services <span className={`text-xs transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>
            <div 
              onMouseLeave={() => setIsServicesOpen(false)}
              className={`absolute top-full left-0 min-w-[220px] bg-[#111118] border border-white/15 rounded-b transition-all duration-200 z-50 shadow-lg ${
                isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
            >
              <Link to="/services/seo" className="block px-5 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-[#18181F]">SEO & Content</Link>
              <Link to="/services/ppc" className="block px-5 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-[#18181F]">Paid Media</Link>
              <Link to="/services/social" className="block px-5 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-[#18181F]">Social Media</Link>
              <Link to="/services/brand" className="block px-5 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-[#18181F]">Brand Identity</Link>
              <Link to="/services/web" className="block px-5 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-[#18181F]">Web Development</Link>
            </div>
          </li>
          
          {/* Portfolio */}
          <li>
            <Link 
              to="/portfolio" 
              className={`px-5 h-full flex items-center text-sm transition-colors ${
                isActive("/portfolio") 
                  ? 'text-[#FF8A5B] relative after:absolute after:bottom-0 after:left-5 after:right-5 after:h-0.5 after:bg-[#E85C2A]' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Portfolio
            </Link>
          </li>
          
          {/* Blog */}
          <li>
            <Link 
              to="/blog" 
              className={`px-5 h-full flex items-center text-sm transition-colors ${
                isActive("/blog") 
                  ? 'text-[#FF8A5B] relative after:absolute after:bottom-0 after:left-5 after:right-5 after:h-0.5 after:bg-[#E85C2A]' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Blog
            </Link>
          </li>
          
          {/* Career */}
          <li>
            <Link 
              to="/career" 
              className={`px-5 h-full flex items-center text-sm transition-colors ${
                isActive("/career") 
                  ? 'text-[#FF8A5B] relative after:absolute after:bottom-0 after:left-5 after:right-5 after:h-0.5 after:bg-[#E85C2A]' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Career
            </Link>
          </li>
          
          {/* Contact */}
          <li>
            <Link 
              to="/contact" 
              className={`px-5 h-full flex items-center text-sm transition-colors ${
                isActive("/contact") 
                  ? 'text-[#FF8A5B] relative after:absolute after:bottom-0 after:left-5 after:right-5 after:h-0.5 after:bg-[#E85C2A]' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-5">
          <span className="hidden lg:block font-mono text-xs text-gray-400">+91 800 123 4567</span>
          <Link to="/contact" className="hidden lg:block bg-[#E85C2A] text-white text-xs font-medium uppercase px-5 py-2 rounded hover:bg-[#FF8A5B] transition">
            Free Strategy Call
          </Link>
          <button className="lg:hidden flex flex-col gap-1" ref={hamburgerRef} onClick={toggleMobileMenu}>
            <span className="block w-5 h-px bg-gray-400"></span>
            <span className="block w-5 h-px bg-gray-400"></span>
            <span className="block w-5 h-px bg-gray-400"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed top-16 left-0 right-0 bg-[#111118] border-b border-white/15 z-40 py-4 flex-col lg:hidden ${isMobileMenuOpen ? 'flex' : 'hidden'}`} ref={mobileMenuRef}>
        <Link to="/home" className="py-3 px-8 text-sm text-gray-400 hover:text-white hover:bg-[#18181F]" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
        <Link to="/about" className="py-3 px-8 text-sm text-gray-400 hover:text-white hover:bg-[#18181F]" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
        <Link to="/services" className="py-3 px-8 text-sm text-gray-400 hover:text-white hover:bg-[#18181F]" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
        <Link to="/portfolio" className="py-3 px-8 text-sm text-gray-400 hover:text-white hover:bg-[#18181F]" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</Link>
        <Link to="/blog" className="py-3 px-8 text-sm text-gray-400 hover:text-white hover:bg-[#18181F]" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
        <Link to="/career" className="py-3 px-8 text-sm text-gray-400 hover:text-white hover:bg-[#18181F]" onClick={() => setIsMobileMenuOpen(false)}>Career</Link>
        <Link to="/contact" className="py-3 px-8 text-sm text-gray-400 hover:text-white hover:bg-[#18181F]" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        <Link to="/contact" className="py-3 px-8 text-sm text-[#FF8A5B] font-medium bg-[#E85C2A]/10" onClick={() => setIsMobileMenuOpen(false)}>Free Strategy Call →</Link>
      </div>
    </>
  );
};

export default Navbar;