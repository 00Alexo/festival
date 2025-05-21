import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const FooTer = () => {
    return (
        <div>
            <footer className="bg-gradient-to-br from-amber-800 to-amber-900 text-amber-100 py-12">
                <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <div>
                    <h3 className="text-xl font-bold text-amber-300 mb-6 border-b border-amber-700 pb-2">Contact</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                        <span className="font-semibold">Email:</span>
                        <a href="mailto:contact@teatruclub.ro" className="hover:text-amber-300 transition-colors">contact@teatruclub.ro</a>
                        </li>
                        <li className="flex items-center gap-2">
                        <span className="font-semibold">Telefon:</span>
                        <a href="tel:+40123456789" className="hover:text-amber-300 transition-colors">+40 123 456 789</a>
                        </li>
                        <li>
                        <span className="font-semibold">Adresă:</span>
                        <p className="mt-1">Carei Carei Carei Carei</p>
                        </li>
                    </ul>
                    </div>
                    
                    {/* Sponsors */}
                    <div>
                    <h3 className="text-xl font-bold text-amber-300 mb-6 border-b border-amber-700 pb-2">Sponsori</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-amber-700/50 p-3 rounded-lg hover:bg-amber-700 transition-colors flex items-center justify-center">Sponsor 1</div>
                        <div className="bg-amber-700/50 p-3 rounded-lg hover:bg-amber-700 transition-colors flex items-center justify-center">Sponsor 2</div>
                        <div className="bg-amber-700/50 p-3 rounded-lg hover:bg-amber-700 transition-colors flex items-center justify-center">Sponsor 3</div>
                        <div className="bg-amber-700/50 p-3 rounded-lg hover:bg-amber-700 transition-colors flex items-center justify-center">Sponsor 4</div>
                    </div>
                    </div>
                    
                    {/* Social Media & Newsletter */}
                    <div>
                    <h3 className="text-xl font-bold text-amber-300 mb-6 border-b border-amber-700 pb-2">Social Media</h3>
                    <div className="flex gap-4 mb-6">
                        <a href="https://facebook.com" className="bg-amber-700/50 p-3 rounded-full hover:bg-amber-700 transition-colors" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF className="text-xl" />
                        </a>
                        <a href="https://instagram.com" className="bg-amber-700/50 p-3 rounded-full hover:bg-amber-700 transition-colors" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-xl" />
                        </a>
                    </div>
                    </div>
                </div>
                
                <div className="border-t border-amber-700/50 mt-10 pt-6 text-center">
                    <p>&copy; {new Date().getFullYear()} Club Teatru. Toate drepturile rezervate.</p>
                </div>
                </div>
            </footer>
        </div>
    );
}
 
export default FooTer;