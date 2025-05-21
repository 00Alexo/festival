import { useState, useEffect } from 'react';
import { FaHome, FaFacebookF, FaChevronDown, FaInstagram, FaYoutube } from 'react-icons/fa';

const NavBar = () => {
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
                
                <div className="flex items-center gap-8 text-lg">
                <div className="relative group">
                    <button 
                    className="flex items-center gap-2 hover:text-amber-300 transition-colors py-2"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                    Ediții <FaChevronDown className="text-xs transition-transform group-hover:rotate-180" />
                    </button>
                    {dropdownOpen && (
                    <div className="absolute top-full right-0 mt-2 w-56 bg-amber-800/95 backdrop-blur-sm shadow-2xl rounded-md py-2 z-10 border border-amber-700/50">
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
                <a href="/galerie" className="hover:text-amber-300 transition-colors py-2 border-b-2 border-transparent hover:border-amber-300">Galerie</a>
                <a href="/regulament" className="hover:text-amber-300 transition-colors py-2 border-b-2 border-transparent hover:border-amber-300">Regulament</a>
                <div className="flex gap-4 ml-2">
                    <a href="https://facebook.com" className="hover:text-amber-300 transition-colors" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF className="text-xl" />
                    </a>
                </div>
                </div>
            </div>
            </nav>
        </div>
    );
}
 
export default NavBar;