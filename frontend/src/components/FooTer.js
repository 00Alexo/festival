import { FaFacebookF, FaInstagram, FaHandshake, FaTheaterMasks } from 'react-icons/fa';

const FooTer = () => {
    return (
        <div>
            <footer className="bg-gradient-to-br from-amber-800 to-amber-900 text-amber-100 py-12" id="footer">
                <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
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
                    
                    {/* Social Media */}
                    <div className="mt-8">
                        <h4 className="text-lg font-semibold text-amber-300 mb-3">Rețele sociale</h4>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/people/Festivalul-Internațional-de-Teatru-pentru-Liceeni-Ioana-Cîcu/100064161033607/?rdid=GEZ5gKEYeaDHPlCp&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19Mz1JHtRM%2F" className="bg-amber-700/50 p-3 rounded-full hover:bg-amber-700 transition-colors" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className="text-xl" />
                            </a>
                        </div>
                    </div>
                    </div>
                    
                    {/* Sponsors */}
                    <div className="lg:col-span-2">
                        <h3 className="text-xl font-bold text-amber-300 mb-6 border-b border-amber-700 pb-2 flex items-center gap-2">
                            <FaHandshake className="text-amber-300" /> Sponsori ediția a IX-a
                        </h3>
                        
                        {/* Main Sponsor */}
                        <div className="mb-6">
                            <h4 className="text-amber-200 font-semibold mb-3">Sponsor Principal</h4>
                            <div className="bg-amber-600/40 p-4 rounded-lg hover:bg-amber-600/60 transition-colors flex items-center justify-center text-center font-bold text-lg border border-amber-500/50">
                                📣 S.C. ARDEALUL S.A.
                            </div>
                        </div>
                        
                        {/* Other Sponsors */}
                        <div className="mb-6">
                            <h4 className="text-amber-200 font-semibold mb-3">Sponsori</h4>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                <div className="bg-amber-700/30 p-3 rounded-lg hover:bg-amber-700/50 transition-colors flex items-center justify-center text-center text-sm">S.C. SHAROLT GROUP S.R.L Craiova</div>
                                <div className="bg-amber-700/30 p-3 rounded-lg hover:bg-amber-700/50 transition-colors flex items-center justify-center text-center text-sm">S.C. OVIBEST S.R.L.</div>
                                <div className="bg-amber-700/30 p-3 rounded-lg hover:bg-amber-700/50 transition-colors flex items-center justify-center text-center text-sm">ŞTRAND JOY CAREI</div>
                                <div className="bg-amber-700/30 p-3 rounded-lg hover:bg-amber-700/50 transition-colors flex items-center justify-center text-center text-sm">S.C. ALCONOR COMPANY S.R.L.</div>
                                <div className="bg-amber-700/30 p-3 rounded-lg hover:bg-amber-700/50 transition-colors flex items-center justify-center text-center text-sm">S.C. VARGA QUATTRO S.R.L</div>
                                <div className="bg-amber-700/30 p-3 rounded-lg hover:bg-amber-700/50 transition-colors flex items-center justify-center text-center text-sm">S.C. IANCULEȘTI S.R.L</div>
                                <div className="bg-amber-700/30 p-3 rounded-lg hover:bg-amber-700/50 transition-colors flex items-center justify-center text-center text-sm">S.C. LORE RENA TRANS S.R.L.</div>
                                <div className="bg-amber-700/30 p-3 rounded-lg hover:bg-amber-700/50 transition-colors flex items-center justify-center text-center text-sm">S.C. EDEX S.R.L.</div>
                                <div className="bg-amber-700/30 p-3 rounded-lg hover:bg-amber-700/50 transition-colors flex items-center justify-center text-center text-sm">FITNESS CAREI</div>
                                <div className="bg-amber-700/30 p-3 rounded-lg hover:bg-amber-700/50 transition-colors flex items-center justify-center text-center text-sm">KFG AUTO CAREI</div>
                            </div>
                        </div>
                        
                        {/* Cultural Partners */}
                        <div>
                            <h4 className="text-amber-200 font-semibold mb-3 flex items-center gap-2">
                                <FaTheaterMasks className="text-amber-200" /> 
                                Parteneri culturali
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                <div className="bg-orange-700/30 p-3 rounded-lg hover:bg-orange-700/50 transition-colors flex items-center justify-center text-center">CENTRUL CULTURAL CAREI</div>
                                <div className="bg-orange-700/30 p-3 rounded-lg hover:bg-orange-700/50 transition-colors flex items-center justify-center text-center">TEATRUL MUNICIPAL CAREI</div>
                                <div className="bg-orange-700/30 p-3 rounded-lg hover:bg-orange-700/50 transition-colors flex items-center justify-center text-center text-sm">FUNDAŢIA CENTRUL DE PROMOVARE A TURISMULUI „GROF KAROLYI" CAREI</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="border-t border-amber-700/50 mt-10 pt-6 text-center">
                    <p>&copy; {new Date().getFullYear()} Clubul de Teatru Ioana Cîcu. Toate drepturile rezervate.</p>
                </div>
                </div>
            </footer>
        </div>
    );
}
 
export default FooTer;