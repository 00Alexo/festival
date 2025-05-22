import { useState, useEffect } from 'react';
import { FaHome, FaFacebookF, FaChevronDown, FaInstagram, FaTimes, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
                        <a href="/editii/1" className="block px-6 py-3 hover:bg-amber-700/70 transition-colors">Ediția I</a>
                        <a href="/editii/2" className="block px-6 py-3 hover:bg-amber-700/70 transition-colors">Ediția II</a>
                        <a href="/editii/3" className="block px-6 py-3 hover:bg-amber-700/70 transition-colors">Ediția III</a>
                        <a href="/editii/4" className="block px-6 py-3 hover:bg-amber-700/70 transition-colors">Ediția IV</a>
                        <a href="/editii/5" className="block px-6 py-3 hover:bg-amber-700/70 transition-colors">Ediția V</a>
                        <a href="/editii/6" className="block px-6 py-3 hover:bg-amber-700/70 transition-colors">Ediția VI</a>
                        <a href="/editii/7" className="block px-6 py-3 hover:bg-amber-700/70 transition-colors">Ediția VII</a>
                        <a href="/editii/8" className="block px-6 py-3 hover:bg-amber-700/70 transition-colors">Ediția VIII</a>
                        <a href="/editii/9" className="block px-6 py-3 hover:bg-amber-700/70 transition-colors">Ediția IX</a>
                    </div>
                )}
                </div>
                <Link to="/galerie" className="hover:text-amber-300 transition-colors py-2 border-b-2 border-transparent hover:border-amber-300">Galerie</Link>
                <Link to="/jurnal" className="hover:text-amber-300 transition-colors py-2 border-b-2 border-transparent hover:border-amber-300">Jurnal</Link>
                <a href="#footer" className="hover:text-amber-300 transition-colors py-2 border-b-2 border-transparent hover:border-amber-300">Sponsori</a>
                <Link to="/regulament" className="hover:text-amber-300 transition-colors py-2 border-b-2 border-transparent hover:border-amber-300">Regulament</Link>
                <div className="flex gap-4 ml-2">
                <a href="https://www.facebook.com/people/Festivalul-Internațional-de-Teatru-pentru-Liceeni-Ioana-Cîcu/100064161033607/?rdid=GEZ5gKEYeaDHPlCp&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19Mz1JHtRM%2F" className="hover:text-amber-300 transition-colors" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF className="text-xl" />
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
                        <a href="/editii/1" className="block px-6 py-3 hover:bg-amber-700/70 transition-colors">Ediția I</a>
                        <a href="/editii/2" className="block px-6 py-3 hover:bg-amber-700/70 transition-colors">Ediția II</a>
                        <a href="/editii/3" className="block px-6 py-3 hover:bg-amber-700/70 transition-colors">Ediția III</a>
                        <a href="/editii/4" className="block px-6 py-3 hover:bg-amber-700/70 transition-colors">Ediția IV</a>
                        <a href="/editii/5" className="block px-6 py-3 hover:bg-amber-700/70 transition-colors">Ediția V</a>
                        <a href="/editii/6" className="block px-6 py-3 hover:bg-amber-700/70 transition-colors">Ediția VI</a>
                        <a href="/editii/7" className="block px-6 py-3 hover:bg-amber-700/70 transition-colors">Ediția VII</a>
                        <a href="/editii/8" className="block px-6 py-3 hover:bg-amber-700/70 transition-colors">Ediția VIII</a>
                        <a href="/editii/9" className="block px-6 py-3 hover:bg-amber-700/70 transition-colors">Ediția IX</a>
                    </div>
                    )}
                </div>
                <Link to="/galerie" className="block py-3 text-lg hover:text-amber-300">Galerie</Link>
                <Link to="/jurnal" className="block py-3 text-lg hover:text-amber-300">Jurnal</Link>
                <a href="#footer" className="hover:text-amber-300 transition-colors py-2 border-b-2 border-transparent hover:border-amber-300">Sponsori</a>
                <Link to="/regulament" className="block py-3 text-lg hover:text-amber-300">Regulament</Link>
                <div className="flex gap-4 py-3">
                    <a href="https://www.facebook.com/people/Festivalul-Internațional-de-Teatru-pentru-Liceeni-Ioana-Cîcu/100064161033607/?rdid=GEZ5gKEYeaDHPlCp&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19Mz1JHtRM%2F" className="hover:text-amber-300" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF className="text-xl" />
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