import { useParams } from "react-router-dom";
import { FaClock, FaMapMarkerAlt, FaCalendarAlt, FaUsers, FaTheaterMasks } from "react-icons/fa";

const Editie = ({editie}) => {
    if(editie == 9) {
        return (
            <div className="container mx-auto py-10 px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4 font-serif text-center">
                        Ediția {editie} - 2025
                    </h1>
                    <h2 className="text-xl md:text-2xl text-amber-600 mb-8 text-center font-medium">
                        Festivalul Interjudețean de Teatru pentru Elevi "Ioana Cîcu"
                    </h2>
                    
                    {/* Event header */}
                    <div className="bg-amber-100 p-6 rounded-lg shadow-lg mb-10 border-l-4 border-amber-500">
                        <div className="flex flex-col md:flex-row justify-between gap-4">
                            <div className="flex items-center gap-2">
                                <FaCalendarAlt className="text-amber-700" />
                                <span className="font-medium">24 mai 2025</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaMapMarkerAlt className="text-amber-700" />
                                <span>Teatrul Municipal Carei</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaClock className="text-amber-700" />
                                <span>09:00 - 17:00</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Program details */}
                    <div className="space-y-10">
                        {/* Opening ceremony */}
                        <div className="bg-gradient-to-r from-amber-800 to-orange-700 p-6 rounded-lg shadow-lg text-white">
                            <div className="flex items-center gap-2 mb-2">
                                <FaClock className="text-amber-300" />
                                <span className="font-bold">Ora 09:00</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Deschiderea festivă</h3>
                            <p className="opacity-90">Teatrul Municipal Carei</p>
                        </div>
                        
                        {/* Middle school section */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-px flex-grow bg-amber-300"></div>
                                <h3 className="text-2xl font-bold text-amber-800 font-serif">Secțiunea GIMNAZIU</h3>
                                <div className="h-px flex-grow bg-amber-300"></div>
                            </div>
                            
                            <div className="space-y-6">
                                {/* Performance 1 */}
                                <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-amber-500">
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center gap-2">
                                            <FaClock className="text-amber-700" />
                                            <span className="font-bold">Ora 09:20</span>
                                        </div>
                                        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">20 min</span>
                                    </div>
                                    <div className="mt-3">
                                        <h4 className="font-bold text-xl text-amber-900">"O întâmplare cu defecțiuni tehnice"</h4>
                                        <p className="text-sm italic text-gray-600">scenariu propriu</p>
                                        <div className="mt-2 flex items-center gap-2">
                                            <FaUsers className="text-amber-600" />
                                            <span className="font-medium">Trupa Scara din Finișel, jud. Cluj</span>
                                        </div>
                                        <p className="text-sm mt-1 text-gray-600">coordonată de Florin Runcan</p>
                                    </div>
                                </div>
                                
                                {/* Performance 2 */}
                                <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-amber-500">
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center gap-2">
                                            <FaClock className="text-amber-700" />
                                            <span className="font-bold">Ora 09:50</span>
                                        </div>
                                        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">15 min</span>
                                    </div>
                                    <div className="mt-3">
                                        <h4 className="font-bold text-xl text-amber-900">"Spărgătorul de nuci"</h4>
                                        <p className="text-sm italic text-gray-600">adaptare după E.T.A. Hoffmann</p>
                                        <div className="mt-2 flex items-center gap-2">
                                            <FaUsers className="text-amber-600" />
                                            <span className="font-medium">Trupa Clubul de teatru LTCD din Moldova Nouă, jud. Caraș-Severin</span>
                                        </div>
                                        <p className="text-sm mt-1 text-gray-600">coordonată de Mărculescu Claudia și Radosavlevici Klermentina</p>
                                    </div>
                                </div>
                                
                                {/* Performance 3 */}
                                <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-amber-500">
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center gap-2">
                                            <FaClock className="text-amber-700" />
                                            <span className="font-bold">Ora 10:15</span>
                                        </div>
                                        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">15 min</span>
                                    </div>
                                    <div className="mt-3">
                                        <h4 className="font-bold text-xl text-amber-900">"Gaițele"</h4>
                                        <p className="text-sm italic text-gray-600">de Alexandru Kirițescu</p>
                                        <div className="mt-2 flex items-center gap-2">
                                            <FaUsers className="text-amber-600" />
                                            <span className="font-medium">Trupa Ecouri din culise de la Școala Gimnazială "Lucian Blaga" Satu Mare</span>
                                        </div>
                                        <p className="text-sm mt-1 text-gray-600">coordonată de Carmen Man</p>
                                    </div>
                                </div>
                                
                                {/* More performances... */}
                                <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-amber-500">
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center gap-2">
                                            <FaClock className="text-amber-700" />
                                            <span className="font-bold">Ora 10:40</span>
                                        </div>
                                        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">10 min</span>
                                    </div>
                                    <div className="mt-3">
                                        <h4 className="font-bold text-xl text-amber-900">"La piață"</h4>
                                        <div className="mt-2 flex items-center gap-2">
                                            <FaUsers className="text-amber-600" />
                                            <span className="font-medium">Trupa ABC de la Școala Gimnazială din Pișcolt, jud. Satu Mare</span>
                                        </div>
                                        <p className="text-sm mt-1 text-gray-600">coordonată de Ioana Morcan</p>
                                    </div>
                                </div>
                                
                                <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-amber-500">
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center gap-2">
                                            <FaClock className="text-amber-700" />
                                            <span className="font-bold">Ora 11:00</span>
                                        </div>
                                        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">15 min</span>
                                    </div>
                                    <div className="mt-3">
                                        <h4 className="font-bold text-xl text-amber-900">"Cuiul lui Nastratin Hogea"</h4>
                                        <p className="text-sm italic text-gray-600">de Anton Pann</p>
                                        <div className="mt-2 flex items-center gap-2">
                                            <FaUsers className="text-amber-600" />
                                            <span className="font-medium">Trupa Clubul de teatru LTCD din Moldova Nouă, jud. Caraș-Severin</span>
                                        </div>
                                        <p className="text-sm mt-1 text-gray-600">coordonată de Mărculescu Claudia și Radosavlevici Klermentina</p>
                                    </div>
                                </div>
                                
                                <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-amber-500">
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center gap-2">
                                            <FaClock className="text-amber-700" />
                                            <span className="font-bold">Ora 11:30</span>
                                        </div>
                                        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">10 min</span>
                                    </div>
                                    <div className="mt-3">
                                        <h4 className="font-bold text-xl text-amber-900">"Fabule"</h4>
                                        <p className="text-sm italic text-gray-600">scenariu propriu</p>
                                        <div className="mt-2 flex items-center gap-2">
                                            <FaUsers className="text-amber-600" />
                                            <span className="font-medium">Trupa Vector in fabula de la Şcoala Gimnazială "Teodor Murășanu" Turda, judeţul Cluj</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Break */}
                        <div className="bg-amber-200 p-4 rounded-lg text-center">
                            <div className="flex items-center gap-2 justify-center">
                                <FaClock className="text-amber-800" />
                                <span className="font-bold">Ora 11:45 - 12:15</span>
                            </div>
                            <p className="font-medium text-amber-800">Pauză</p>
                        </div>
                        
                        {/* High school section */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-px flex-grow bg-amber-300"></div>
                                <h3 className="text-2xl font-bold text-amber-800 font-serif">Secțiunea LICEU</h3>
                                <div className="h-px flex-grow bg-amber-300"></div>
                            </div>
                            
                            <div className="space-y-6">
                                {/* High school performances */}
                                <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-orange-500">
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center gap-2">
                                            <FaClock className="text-amber-700" />
                                            <span className="font-bold">Ora 12:15</span>
                                        </div>
                                        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">25 min</span>
                                    </div>
                                    <div className="mt-3">
                                        <h4 className="font-bold text-xl text-amber-900">"Pitici pe creier"</h4>
                                        <p className="text-sm italic text-gray-600">adaptare după "Inside out" de Pete Docter, Ronnie Del Carmen, Meg LeFauve</p>
                                        <div className="mt-2 flex items-center gap-2">
                                            <FaUsers className="text-amber-600" />
                                            <span className="font-medium">Trupa M.E.E.M. a Centrului Cultural Carei</span>
                                        </div>
                                        <p className="text-sm mt-1 text-gray-600">coordonată de Adrian Ștefănuți</p>
                                    </div>
                                </div>
                                
                                <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-orange-500">
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center gap-2">
                                            <FaClock className="text-amber-700" />
                                            <span className="font-bold">Ora 12:50</span>
                                        </div>
                                        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">10 min</span>
                                    </div>
                                    <div className="mt-3">
                                        <h4 className="font-bold text-xl text-amber-900">"Lecții din istorie"</h4>
                                        <p className="text-sm italic text-gray-600">de Slawomir Mrozek</p>
                                        <div className="mt-2 flex items-center gap-2">
                                            <FaUsers className="text-amber-600" />
                                            <span className="font-medium">Cercul de teatru al Liceului Evanghelic Fasori din Budapesta, Ungaria</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-orange-500">
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center gap-2">
                                            <FaClock className="text-amber-700" />
                                            <span className="font-bold">Ora 13:10</span>
                                        </div>
                                        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">36 min</span>
                                    </div>
                                    <div className="mt-3">
                                        <h4 className="font-bold text-xl text-amber-900">"O cerere în căsătorie"</h4>
                                        <p className="text-sm italic text-gray-600">de A. P. Cehov</p>
                                        <div className="mt-2 flex items-center gap-2">
                                            <FaUsers className="text-amber-600" />
                                            <span className="font-medium">Trupa Scara a Asociației Culturale Poiana, jud. Cluj</span>
                                        </div>
                                        <p className="text-sm mt-1 text-gray-600">coordonată de Florin Runcan</p>
                                    </div>
                                </div>
                                
                                <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-orange-500">
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center gap-2">
                                            <FaClock className="text-amber-700" />
                                            <span className="font-bold">Ora 14:00</span>
                                        </div>
                                        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">45 min</span>
                                    </div>
                                    <div className="mt-3">
                                        <h4 className="font-bold text-xl text-amber-900">"Harap-alb"</h4>
                                        <p className="text-sm italic text-gray-600">de Ion Creangă</p>
                                        <div className="mt-2 flex items-center gap-2">
                                            <FaUsers className="text-amber-600" />
                                            <span className="font-medium">Trupa ArTeen din Pișcolt</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-orange-500">
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center gap-2">
                                            <FaClock className="text-amber-700" />
                                            <span className="font-bold">Ora 15:00</span>
                                        </div>
                                        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">50 min</span>
                                    </div>
                                    <div className="mt-3">
                                        <h4 className="font-bold text-xl text-amber-900">"Răpirea din Cioclovina"</h4>
                                        <p className="text-sm italic text-gray-600">după un text scris de Iuliu Orban</p>
                                        <div className="mt-2 flex items-center gap-2">
                                            <FaUsers className="text-amber-600" />
                                            <span className="font-medium">Trupa TincART de la Liceul Teoretic "Nicolae Jiga" Tinca, jud. Bihor</span>
                                        </div>
                                        <p className="text-sm mt-1 text-gray-600">coordonată de Iuliu Orban</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Closing events */}
                        <div className="space-y-6">
                            <div className="bg-gradient-to-r from-amber-700 to-orange-600 p-6 rounded-lg shadow-lg text-white">
                                <div className="flex items-center gap-2 mb-2">
                                    <FaClock className="text-amber-300" />
                                    <span className="font-bold">Ora 16:30</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Festivitatea de premiere</h3>
                                <p className="opacity-90">Teatrul Municipal Carei</p>
                            </div>
                            
                            <div className="bg-gradient-to-r from-amber-600 to-amber-800 p-6 rounded-lg shadow-lg text-white">
                                <div className="flex items-center gap-2 mb-2">
                                    <FaClock className="text-amber-300" />
                                    <span className="font-bold">Ora 17:00</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-2">
                                    <span className="flex items-center gap-2">
                                        <FaTheaterMasks className="text-amber-300" />
                                        Vernisajul expoziției de artă "Karul Art 4"
                                    </span>
                                </h3>
                                <p className="opacity-90">Castelul Károlyi din Parcul Karolyi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
    // Default content for other editions
    return (
        <div className="container mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold text-amber-800 mb-6 font-serif text-center">
                Ediția {editie}
            </h1>
            <p className="text-center text-amber-700">
                Informațiile pentru această ediție vor fi disponibile în curând.
            </p>
        </div>
    );
}
 
export default Editie;