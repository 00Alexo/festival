import { useState, useEffect } from 'react';
import { FaHome, FaFacebookF, FaChevronDown, FaInstagram, FaTimes, FaBars } from 'react-icons/fa';

const NavBar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle navbar scroll effect
    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when screen gets resized to desktop
    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth >= 768) {
            setMobileMenuOpen(false);
        }
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Mobile menu toggle
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <div>
            <nav className={`fixed w-full z-50 transition-all duration-300 ${
            scrolled ? 'bg-amber-800/95 shadow-xl py-2' : 'bg-amber-800 py-5'
            } text-amber-100`}>
            <div className="container mx-auto flex justify-between items-center px-4">
            <a href="/" className="text-2xl font-bold flex items-center gap-3">
                <FaHome className="text-amber-300 text-3xl" />
                <span className="hidden md:block font-serif tracking-wider">Acasa</span>
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 text-lg">
                <div className="relative group">
                <button 
                    className="flex items-center gap-2 hover:text-amber-300 transition-colors py-2"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                    Ediții <FaChevronDown className="text-xs transition-transform group-hover:rotate-180" />
                </button>
                {dropdownOpen && (
                    <div className="absolute top-full right-0 mt-2 w-56 bg-amber-800/95 backdrop-blur-sm shadow-2xl rounded-md py-2 z-10 border border-amber-700/50">
                    <a href="/editii/2025" className="block px-6 py-3 hover:bg-amber-700/70 transition-colors">Ediția 2025</a>
                    <a href="/editii/2024" className="block px-6 py-3 hover:bg-amber-700/70 transition-colors">Ediția 2024</a>
                    <a href="/editii/2023" className="block px-6 py-3 hover:bg-amber-700/70 transition-colors">Ediția 2023</a>
                    </div>
                )}
                </div>
                <a href="/galerie" className="hover:text-amber-300 transition-colors py-2 border-b-2 border-transparent hover:border-amber-300">Galerie</a>
                <a href="/regulament" className="hover:text-amber-300 transition-colors py-2 border-b-2 border-transparent hover:border-amber-300">Regulament</a>
                <div className="flex gap-4 ml-2">
                <a href="https://facebook.com" className="hover:text-amber-300 transition-colors" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF className="text-xl" />
                </a>
                <a href="https://instagram.com" className="hover:text-amber-300 transition-colors" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-xl" />
                </a>
                </div>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
                className="md:hidden text-amber-100 focus:outline-none" 
                onClick={toggleMobileMenu}
            >
                {mobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
            </div>
            
            {/* Mobile Menu */}
            {mobileMenuOpen && (
            <div className="md:hidden bg-amber-800/95 backdrop-blur-sm shadow-xl py-4">
                <div className="flex flex-col space-y-2 px-4">
                <div className="py-3">
                    <div 
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                    <span className="text-lg">Ediții</span>
                    <FaChevronDown className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                    </div>
                    {dropdownOpen && (
                    <div className="mt-2 pl-4 border-l-2 border-amber-600 space-y-2">
                        <a href="/editii/2025" className="block px-6 py-3 hover:bg-amber-700/70 transition-colors">Ediția I</a>
                        <a href="/editii/2024" className="block px-6 py-3 hover:bg-amber-700/70 transition-colors">Ediția II</a>
                        <a href="/editii/2023" className="block px-6 py-3 hover:bg-amber-700/70 transition-colors">Ediția III</a>
                        <a href="/editii/2023" className="block px-6 py-3 hover:bg-amber-700/70 transition-colors">Ediția IV</a>
                        <a href="/editii/2023" className="block px-6 py-3 hover:bg-amber-700/70 transition-colors">Ediția V</a>
                        <a href="/editii/2023" className="block px-6 py-3 hover:bg-amber-700/70 transition-colors">Ediția VI</a>
                        <a href="/editii/2023" className="block px-6 py-3 hover:bg-amber-700/70 transition-colors">Ediția VII</a>
                        <a href="/editii/2023" className="block px-6 py-3 hover:bg-amber-700/70 transition-colors">Ediția VIII</a>
                        <a href="/editii/2023" className="block px-6 py-3 hover:bg-amber-700/70 transition-colors">Ediția IX</a>
                    </div>
                    )}
                </div>
                <a href="/galerie" className="block py-3 text-lg hover:text-amber-300">Galerie</a>
                <a href="/regulament" className="block py-3 text-lg hover:text-amber-300">Regulament</a>
                <div className="flex gap-4 py-3">
                    <a href="https://facebook.com" className="hover:text-amber-300" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF className="text-xl" />
                    </a>
                    <a href="https://instagram.com" className="hover:text-amber-300" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-xl" />
                    </a>
                </div>
                </div>
            </div>
            )}
            </nav>
        </div>
    );
}
 
export default NavBar;