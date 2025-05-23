import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FaCalendarAlt, FaComments, FaHeart, FaImage, FaPen, FaShare, FaUserCircle, FaCopy, FaCheckCircle, FaTimes
} from 'react-icons/fa';

const mockPosts = [
        {
            id: 1,
            author: "Maria Popescu",
            authorImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
            date: "22 mai 2025",
            content: "Astăzi am început pregătirile pentru Festivalul de Teatru \"Ioana Cîcu\" 2025! Echipa noastră a finalizat selecția pieselor care vor fi prezentate și suntem încântați de diversitatea și calitatea lucrărilor din acest an.\n\nNe vedem pe 24 mai pentru o zi plină de teatru, emoție și creativitate!",
            images: [
                "https://images.unsplash.com/photo-1503095396549-807759245b35",
                "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212"
            ],
            likes: 24,
            comments: 6
        },
        {
            id: 2,
            author: "Adrian Ștefănuți",
            date: "15 mai 2025",
            content: "Repetiții intense cu Trupa M.E.E.M. pentru piesa \"Pitici pe creier\". Suntem mândri de progresul pe care l-am făcut și nerăbdători să prezentăm adaptarea noastră după \"Inside Out\". Tinerii actori au muncit enorm și au reușit să surprindă perfect esența emoțiilor umane prin performance-ul lor.",
            images: [
                "https://images.unsplash.com/photo-1516307365426-bea591f05011",
                "https://images.unsplash.com/photo-1469406396016-013bfae5d83e",
                "https://images.unsplash.com/photo-1598387181032-a3103a2db5b3"
            ],
            likes: 37,
            comments: 12
        },
        {
            id: 3,
            author: "Claudia Mărculescu",
            authorImg: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
            date: "10 mai 2025",
            content: "Trupa Clubul de teatru LTCD se pregătește pentru două reprezentații la festivalul din acest an! \"Spărgătorul de nuci\" și \"Cuiul lui Nastratin Hogea\" sunt două piese complet diferite care vor arăta versatilitatea tinerilor noștri actori.\n\nAm lucrat la costume și decoruri săptămânile trecute și suntem aproape gata pentru marele eveniment!",
            images: [
                "https://images.unsplash.com/photo-1603203040743-2aea8aa46182"
            ],
            likes: 18,
            comments: 4
        },
        {
            id: 4,
            author: "Florin Runcan",
            date: "5 mai 2025",
            content: "Trupa Scara prezintă anul acesta două piese contrastante: \"O întâmplare cu defecțiuni tehnice\", o creație originală a trupei noastre de gimnaziu, și clasica \"O cerere în căsătorie\" de Cehov, interpretată de trupa de liceu. Suntem încântați să participăm la Festivalul \"Ioana Cîcu\" și să împărtășim munca noastră cu iubitorii de teatru.",
            likes: 15,
            comments: 3
        },
        {
            id: 5,
            author: "Carmen Man",
            authorImg: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb",
            date: "1 mai 2025",
            content: "Trupa Ecouri din culise a finalizat ultimele repetiții pentru \"Gaițele\". Sunt atât de mândră de acești tineri actori care au abordat cu curaj această piesă clasică a lui Alexandru Kirițescu. Au reușit să aducă o interpretare proaspătă și autentică, păstrând în același timp esența textului original.",
            images: [
                "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf",
                "https://images.unsplash.com/photo-1530649159659-c3a9d5a7eaad"
            ],
            likes: 29,
            comments: 7
        }
];
const Jurnal = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(true);
    const [showCopyModal, setShowCopyModal] = useState(false);
    const [copiedPostId, setCopiedPostId] = useState(null);
    const location = useLocation();

    useEffect(() => {
        // Simulating data fetching with a slight delay
        setTimeout(() => {
            setPosts(mockPosts);
            setLoading(false);
            
            // After posts are loaded, check if there's a hash in the URL
            // and scroll to that element
            setTimeout(() => {
                handleHashScroll();
            }, 100);
        }, 500);
    }, []);
    
    // Handle hash-based navigation when URL changes
    useEffect(() => {
        handleHashScroll();
    }, [location.hash]);
    
    // Function to handle scrolling to a post based on hash
    const handleHashScroll = () => {
        if (location.hash) {
            const postId = location.hash.substring(1); // Remove the # character
            const element = document.getElementById(postId);
            
            if (element) {
                // Scroll to the post with smooth behavior
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                
                // Add a highlight effect to make it obvious which post was linked
                element.classList.add('ring-4', 'ring-amber-400', 'ring-opacity-75');
                
                // Remove the highlight after 2 seconds
                setTimeout(() => {
                    element.classList.remove('ring-4', 'ring-amber-400', 'ring-opacity-75');
                }, 2000);
            }
        }
    };

    useEffect(() => {
        // Auto-hide the modal after 3 seconds
        if (showCopyModal) {
            const timer = setTimeout(() => {
                setShowCopyModal(false);
            }, 3000);
            
            return () => clearTimeout(timer);
        }
    }, [showCopyModal]);

    // Function to handle sharing (copying link to clipboard)
    const handleShare = (postId) => {
        // Create the URL for this specific post
        const postUrl = `${window.location.origin}${window.location.pathname}#${postId}`;
        
        // Copy the URL to clipboard
        navigator.clipboard.writeText(postUrl)
            .then(() => {
                setCopiedPostId(postId);
                setShowCopyModal(true);
            })
            .catch(err => {
                console.error('Could not copy text: ', err);
            });
    };

    // Close the modal
    const closeModal = () => {
        setShowCopyModal(false);
    };

    return (
        <div className="container mx-auto py-10 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-amber-800 font-serif">
                        Jurnal de Festival
                    </h1>
                    
                    {isAdmin && (
                        <Link 
                            to="/jurnal/upload" 
                            className="bg-amber-700 hover:bg-amber-600 text-white py-2 px-4 rounded-lg transition-colors flex items-center gap-2"
                        >
                            <FaPen /> Adaugă postare
                        </Link>
                    )}
                </div>

                <p className="text-amber-700 mb-10">
                    Urmărește aventurile și evenimentele festivalului nostru de teatru prin jurnalul actualizat de echipa noastră.
                </p>
                
                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-700"></div>
                    </div>
                ) : (
                    <div className="space-y-10">
                        {posts.map(post => (
                            <div 
                                key={post.id} 
                                id={post.id}
                                className="bg-white rounded-xl shadow-md overflow-hidden border border-amber-100 transition-all duration-300"
                            >
                                {/* Post header */}
                                <div className="p-5 border-b border-amber-100">
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 bg-amber-200 rounded-full overflow-hidden flex items-center justify-center">
                                                {post.authorImg ? (
                                                    <img src={post.authorImg} alt={post.author} className="w-full h-full object-cover" />
                                                ) : (
                                                    <FaUserCircle className="text-amber-700 text-3xl" />
                                                )}
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-amber-900">{post.author}</h3>
                                                <div className="flex items-center text-amber-600 text-sm">
                                                    <FaCalendarAlt className="mr-1" />
                                                    <time>{post.date}</time>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {isAdmin && (
                                            <button className="text-amber-600 hover:text-amber-800">
                                                <FaPen />
                                            </button>
                                        )}
                                    </div>
                                </div>
                                
                                {/* Post body */}
                                <div className="p-5">
                                    <p className="text-amber-900 mb-4 whitespace-pre-line">{post.content}</p>
                                    
                                    {post.images && post.images.length > 0 && (
                                        <div className={`grid gap-2 mb-4 ${
                                            post.images.length === 1 ? 'grid-cols-1' : 
                                            post.images.length === 2 ? 'grid-cols-2' : 'grid-cols-3'
                                        }`}>
                                            {post.images.map((img, idx) => (
                                                <div 
                                                    key={idx} 
                                                    className="aspect-video bg-amber-100 rounded-lg overflow-hidden"
                                                >
                                                    <img 
                                                        src={img} 
                                                        alt={`Imagine ${idx + 1}`}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    
                                    {/* Post stats */}
                                    <div className="flex items-center justify-between text-sm text-amber-600 mt-4">
                                        <div className="flex items-center gap-2">
                                            <span className="flex items-center gap-1">
                                                <FaHeart />
                                                {post.likes}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <FaComments />
                                                {post.comments}
                                            </span>
                                        </div>
                                        <div 
                                            className="cursor-pointer hover:text-amber-800 flex items-center gap-1"
                                            onClick={() => handleShare(post.id)}
                                        >
                                            <FaShare />
                                            <span>Distribuie</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Post actions */}
                                <div className="grid grid-cols-3 border-t border-amber-100">
                                    <button className="py-3 flex justify-center items-center gap-2 hover:bg-amber-50 transition-colors text-amber-700">
                                        <FaHeart /> Like
                                    </button>
                                    <button className="py-3 flex justify-center items-center gap-2 hover:bg-amber-50 transition-colors text-amber-700 border-l border-r border-amber-100">
                                        <FaComments /> Comentează
                                    </button>
                                    <button 
                                        onClick={() => handleShare(post.id)}
                                        className="py-3 flex justify-center items-center gap-2 hover:bg-amber-50 transition-colors text-amber-700"
                                    >
                                        <FaShare /> Distribuie
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            
            {/* Copy Confirmation Modal */}
            {showCopyModal && (
                <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-amber-700 text-white rounded-lg shadow-lg px-6 py-4 flex items-center justify-between z-50 max-w-sm w-full">
                    <div className="flex items-center gap-3">
                        <FaCheckCircle className="text-amber-200 text-xl" />
                        <div>
                            <p className="font-medium">Link copiat!</p>
                            <p className="text-sm text-amber-100">
                                Link-ul a fost copiat în clipboard
                            </p>
                        </div>
                    </div>
                    <button 
                        onClick={closeModal}
                        className="text-amber-100 hover:text-white p-1"
                    >
                        <FaTimes />
                    </button>
                </div>
            )}
        </div>
    );
}
 
export default Jurnal;