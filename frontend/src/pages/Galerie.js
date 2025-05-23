import { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaSpinner, FaCamera, FaSearch, FaTimes } from 'react-icons/fa';

const Galerie = () => {
    const [activeEdition, setActiveEdition] = useState(8); // Default to edition 8 which has images
    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState([]);
    const [lightboxImage, setLightboxImage] = useState(null);
    const editionsScrollRef = useRef(null);

    const editions = [
        { id: 1, name: "Ediția I", hasImages: false },
        { id: 2, name: "Ediția II", hasImages: false },
        { id: 3, name: "Ediția III", hasImages: false },
        { id: 4, name: "Ediția IV",  hasImages: false },
        { id: 5, name: "Ediția V",  hasImages: false },
        { id: 6, name: "Ediția VI", hasImages: false },
        { id: 7, name: "Ediția VII", hasImages: false },
        { id: 8, name: "Ediția VIII", hasImages: true },
        { id: 9, name: "Ediția IX", hasImages: false },
    ];

    // Sample images for edition 8 (replace with real API call)
    const dummyImages = [
        { id: 1, src: "https://i.imgur.com/eHk23bp.jpeg", alt: "Festival moment" },
        { id: 2, src: "https://i.imgur.com/TJty0vJ.jpeg", alt: "Performance" },
        { id: 3, src: "https://i.imgur.com/vott1Fd.jpeg", alt: "Actors" },
        { id: 4, src: "https://i.imgur.com/EDqN8s7.jpeg", alt: "Stage" },
        { id: 5, src: "https://i.imgur.com/jHltJza.jpeg", alt: "Audience" },
        { id: 6, src: "https://i.imgur.com/5zuKGY0.jpeg", alt: "Theater hall" },
        { id: 7, src: "https://i.imgur.com/cF6qeU2.jpeg", alt: "Performance" },
        { id: 8, src: "https://i.imgur.com/VZQz0Gh.jpeg", alt: "Behind the scenes" },
        { id: 9, src: "https://i.imgur.com/OhinuDD.jpeg", alt: "Festival moment" }
    ];

    useEffect(() => {
        // Here you would typically fetch images from your API
        // based on the activeEdition
        setLoading(true);
        
        // Simulating API call
        setTimeout(() => {
            if (activeEdition === 8) {
                setImages(dummyImages);
            } else {
                setImages([]);
            }
            setLoading(false);
        }, 800);
    }, [activeEdition]);

    // Functions to scroll the editions carousel left/right
    const scrollLeft = () => {
        if (editionsScrollRef.current) {
            editionsScrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (editionsScrollRef.current) {
            editionsScrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    // Open image in lightbox
    const openLightbox = (image) => {
        setLightboxImage(image);
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    };

    // Close lightbox
    const closeLightbox = () => {
        setLightboxImage(null);
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    };

    return (
        <div className="container mx-auto py-10 px-4">
            <h1 className="text-4xl font-bold text-amber-800 mb-6 text-center font-serif">
                Galerie Foto
            </h1>
            <p className="text-center text-amber-700 max-w-2xl mx-auto mb-10">
                Explorează momente captivante din toate edițiile festivalului nostru de teatru. 
                Selectează o ediție din caruselul de mai jos pentru a vizualiza galeria foto.
            </p>

            {/* Editions Carousel */}
            <div className="relative mb-10">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
                    <button 
                        onClick={scrollLeft}
                        className="bg-amber-700/90 hover:bg-amber-600 text-white rounded-full p-2 shadow-lg"
                    >
                        <FaChevronLeft />
                    </button>
                </div>

                <div 
                    ref={editionsScrollRef}
                    className="flex overflow-x-auto scrollbar-hide py-5 px-8 scroll-smooth"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {editions.map((edition) => (
                        <div 
                            key={edition.id}
                            onClick={() => setActiveEdition(edition.id)}
                            className={`flex-shrink-0 cursor-pointer rounded-xl px-6 py-4 mx-2 min-w-[180px] text-center transition-all transform hover:scale-105 ${
                                activeEdition === edition.id 
                                    ? 'bg-amber-700 text-white shadow-lg scale-105' 
                                    : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                            }`}
                        >
                            <h3 className="font-bold">{edition.name}</h3>
                        </div>
                    ))}
                </div>

                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
                    <button 
                        onClick={scrollRight}
                        className="bg-amber-700/90 hover:bg-amber-600 text-white rounded-full p-2 shadow-lg"
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </div>

            {/* Active Edition Title */}
            <h2 className="text-2xl font-semibold text-center mb-8 text-amber-800">
                {editions.find(e => e.id === activeEdition)?.name}
            </h2>

            {/* Images Grid */}
            <div className="relative">
                {loading ? (
                    <div className="min-h-[400px] flex items-center justify-center">
                        <FaSpinner className="animate-spin text-4xl text-amber-600" />
                    </div>
                ) : editions.find(e => e.id === activeEdition)?.hasImages ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {images.map((image) => (
                            <div 
                                key={image.id} 
                                onClick={() => openLightbox(image)}
                                className="aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer group relative"
                            >
                                <img 
                                    src={image.src} 
                                    alt={image.alt}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <div className="text-white">
                                        <FaSearch className="inline-block mr-2" />
                                        <span>Click pentru a mări</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="min-h-[400px] bg-amber-50 rounded-2xl flex flex-col items-center justify-center p-6">
                        <FaCamera className="text-6xl text-amber-300 mb-4" />
                        <h3 className="text-xl font-semibold text-amber-800 mb-2">Fotografii în curând!</h3>
                        <p className="text-amber-700 text-center max-w-md">
                            Fotografiile pentru această ediție vor fi disponibile în curând. 
                            Reveniți mai târziu pentru a vedea galeria completă.
                        </p>
                    </div>
                )}
            </div>

            {/* Lightbox */}
            {lightboxImage && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    <div 
                        className="relative max-w-6xl max-h-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img 
                            src={lightboxImage.src} 
                            alt={lightboxImage.alt}
                            className="max-w-full max-h-[90vh] object-contain"
                        />
                        
                        <button 
                            className="absolute top-2 right-2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-colors"
                            onClick={closeLightbox}
                        >
                            <FaTimes className="text-xl" />
                        </button>
                        
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 px-4 py-2 rounded-lg text-white text-sm">
                            {lightboxImage.alt}
                        </div>
                    </div>
                </div>
            )}
            <div className="my-12 py-10 px-6 bg-amber-50 border-2 border-dashed border-amber-300 rounded-xl text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-amber-800 mb-4 tracking-wide">
                    Urmează să fie adăugate mai multe poze!
                </h2>
                <div className="mt-8 flex justify-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-amber-400 animate-bounce"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-600 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-3 h-3 rounded-full bg-amber-800 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
            </div>
        </div>
    );
};
 
export default Galerie;