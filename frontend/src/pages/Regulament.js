import { FaArrowLeft, FaHome, FaScroll, FaTheaterMasks, FaClock, FaLanguage, FaSchool, FaTrophy, FaGavel } from "react-icons/fa";
import { Link } from "react-router-dom";

const Regulament = () => {
    return (
        <div className="bg-amber-50/30">
            <div className="container mx-auto py-16 px-4">
                <div className="max-w-4xl mx-auto bg-white border border-amber-200 rounded-xl shadow-lg p-8 mb-8">
                    <h1 className="text-4xl font-bold text-amber-800 mb-6 font-serif text-center">
                        Regulament
                    </h1>
                    <div className="text-amber-900 space-y-6">
                        <div className="bg-amber-100/60 p-5 rounded-lg border-l-4 border-amber-600">
                            <h2 className="text-xl font-bold text-amber-800 mb-3 flex items-center">
                                <FaScroll className="mr-2" /> Pentru derularea Festivalului:
                            </h2>
                            <div className="space-y-4">
                                <div className="flex gap-3">
                                    <FaTheaterMasks className="text-amber-600 text-lg flex-shrink-0 mt-1" />
                                    <p>
                                        Repertoriul, specia şi regia nu sunt impuse de organizatori, fapt care face posibilă prezenţa unei palete largi de activităţi teatrale. Trupele de teatru ale elevilor îşi pot alege ca repertoriu piese din dramaturgia naţională sau universală, clasică sau contemporană, creații proprii, fragmente dramaturgice din manualele școlare etc. Sunt acceptate şi spectacole colaj, coupe, teatru experimental, music-hall, pantomimă, animaţie etc.
                                    </p>
                                </div>
                                
                                <p className="pl-8">
                                    Spectacolele prezentate vor avea un conţinut moral, educativ, cu un limbaj şi comportament decent, adecvat vârstei.
                                </p>
                                
                                <div className="flex gap-3">
                                    <FaClock className="text-amber-600 text-lg flex-shrink-0 mt-1" />
                                    <p>
                                        <strong>Durata</strong> unei piese/spectacol trebuie să fie între 15 şi 40 de minute. Depăşirea timpului atrage după sine penalizarea trupei (dacă depăşirea timpului este mai mare de 5 min).
                                    </p>
                                </div>
                                
                                <div className="flex gap-3">
                                    <FaLanguage className="text-amber-600 text-lg flex-shrink-0 mt-1" />
                                    <p>
                                        Reprezentaţiile vor fi în limba română sau maghiară, acceptându-se, de asemenea, şi spectacole în limba engleză, franceză sau germană.
                                    </p>
                                </div>
                                
                                <div className="flex gap-3">
                                    <FaSchool className="text-amber-600 text-lg flex-shrink-0 mt-1" />
                                    <p>
                                        O instituţie poate fi reprezentată de către una sau mai multe trupe de teatru existente în instituţia respectivă. O trupă de teatru poate prezenta unul sau mai multe spectacole, fiecare spectacol prezentat beneficiind de jurizare separată.
                                    </p>
                                </div>
                                
                                <p className="pl-8">
                                    Spectacolele se vor trimite online sub formă de înregistrare până la data stabilită, anual, de organizatori și anunțată pe pagina Festivalului. Jurizarea va avea loc în luna mai, urmând a fi publicate online rezultatele (pe site-ul școlii, pe pagina de Facebook a Festivalului). Diplomele de participare vor fi trimise școlilor pe adresa precizată în Fișa de înscriere, iar premiile vor fi înmânate câștigătorilor la festivitatea de premiere, organizată în cadrul unei gale, în a doua jumătate a lunii mai.
                                </p>
                                
                                <p className="pl-8">
                                    Spectacolele vor fi evaluate de un juriu format din specialişti: actori, regizori, dramaturgi, critici literari, profesori de specialitate, inspectori şcolari.
                                </p>
                            </div>
                        </div>
                        
                        <div className="bg-amber-100/60 p-5 rounded-lg border-l-4 border-amber-700">
                            <h2 className="text-xl font-bold text-amber-800 mb-3 flex items-center">
                                <FaGavel className="mr-2" /> Criterii de jurizare:
                            </h2>
                            <ul className="list-disc list-inside space-y-2 pl-4">
                                <li>Omogenitatea trupei</li> 
                                <li>Talentul actoricesc</li>
                                <li>Stăpânirea limbajului scenic</li>
                                <li>Armonizarea interpretării actorilor</li>
                            </ul>
                        </div>
                        
                        <div className="bg-amber-100/60 p-5 rounded-lg border-l-4 border-amber-800">
                            <h2 className="text-xl font-bold text-amber-800 mb-3 flex items-center">
                                <FaTrophy className="mr-2" /> Premiile concursului:
                            </h2>
                            <div className="space-y-3">
                                <p>
                                    Toţi participanţii (concurenţi, îndrumători) vor primi diplome de participare.
                                </p>
                                <p>
                                    În cadrul concursului se vor acorda următoarele categorii de premii, pentru trupe, nivel gimnazial și liceal: <strong>premiile I, II şi III</strong>.
                                </p>
                                
                                <p>Juriul va mai acorda următoarele premii, nivel gimnazial și liceal:</p>
                                <ul className="list-disc list-inside space-y-1 pl-4">
                                    <li>Premiul pentru cel mai bun rol principal feminin</li>
                                    <li>Premiul pentru cel mai bun rol principal masculin</li>
                                    <li>Premiul pentru cel mai bun rol secundar feminin</li>
                                    <li>Premiul pentru cel mai bun rol secundar masculin</li>
                                </ul>
                                
                                <p>
                                    Cu motivaţii obiective juriul îşi rezervă dreptul de a nu acorda unele premii.
                                </p>
                                <p>
                                    Juriul va premia prestaţia exclusivă a elevilor în spectacol şi spectacolele în ansamblul lor. Deciziile juriului sunt definitive şi nu pot fi contestate.
                                </p>
                            </div>
                        </div>
                        
                        <div className="mt-8 bg-gradient-to-r from-amber-600 to-amber-500 p-4 rounded-lg shadow text-white text-center font-bold">
                            Nu se percepe taxă de înscriere!
                        </div>
                    </div>
                </div>
                
                <div className="flex justify-center gap-4">
                    <Link to="/" className="flex items-center gap-2 bg-amber-700 hover:bg-amber-600 text-white py-2 px-4 rounded-lg transition-colors">
                        <FaHome /> Pagina principală
                    </Link>
                    <button 
                        onClick={() => window.history.back()} 
                        className="flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white py-2 px-4 rounded-lg transition-colors"
                    >
                        <FaArrowLeft /> Înapoi
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Regulament;