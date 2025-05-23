import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FaCalendarAlt, FaComments, FaHeart, FaImage, FaPen, FaShare, FaUserCircle, FaCopy, FaCheckCircle, FaTimes, FaUser, FaPaperPlane
} from 'react-icons/fa';
import { formatDistanceToNow } from 'date-fns';
import { ro } from 'date-fns/locale';
import { useAuthContext } from '../Hooks/useAuthContext';

const Jurnal = () => {
    const { user } = useAuthContext();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showCopyModal, setShowCopyModal] = useState(false);
    const [copiedPostId, setCopiedPostId] = useState(null);
    const location = useLocation();
    const [showImageViewer, setShowImageViewer] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [commentText, setCommentText] = useState('');
    const [showComments, setShowComments] = useState({});
    const [submittingComment, setSubmittingComment] = useState(false);
    const [commentError, setCommentError] = useState({});

    const openImageViewer = (image) => {
        setSelectedImage(image);
        setShowImageViewer(true);
        // Prevent scrolling when modal is open
        document.body.style.overflow = 'hidden';
    };
    
    // Function to close the image viewer
    const closeImageViewer = () => {
        setShowImageViewer(false);
        setSelectedImage(null);
        // Re-enable scrolling
        document.body.style.overflow = 'auto';
    };

    const getJurnale = async () =>{
        const response = await fetch(`${process.env.REACT_APP_API}/api/jurnal/getJurnale`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        const json = await response.json();

        if(response.ok){
            setPosts(json);
        }

        if(!response.ok){
            console.log(json.error);
        }
    }

    useEffect(() => {
        getJurnale();
        setLoading(false);
        
        // After posts are loaded, check if there's a hash in the URL
        // and scroll to that element
        setTimeout(() => {
            handleHashScroll();
        }, 100);
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

    const likeJurnal = async (postId) => {
        // Check if user is logged in
        if (!user) {
            alert('Trebuie să fii autentificat pentru a aprecia o postare!');
            return;
        }
        
        try {
            const response = await fetch(`${process.env.REACT_APP_API}/api/jurnal/like/${postId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                },
                body: JSON.stringify({ username: user.username })
            });
            
            const data = await response.json();
            
            if (response.ok) {
                // Update post likes locally for immediate UI feedback
                setPosts(prevPosts => 
                    prevPosts.map(post => 
                        post._id === postId 
                            ? { ...post, likes: [...(post.likes || []), user.username] } 
                            : post
                    )
                );
            } else {
                // Show error (like already given, etc.)
                alert(data.error || 'A apărut o eroare la aprecierea postării.');
            }
        } catch (error) {
            console.error("Error liking post:", error);
            alert('A apărut o eroare la aprecierea postării.');
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

    const toggleComments = (postId) => {
        setShowComments(prev => {
            const newState = { ...prev };
            newState[postId] = !prev[postId];
            
            // If we're showing comments and they haven't been loaded yet, load them
            if (newState[postId]) {
                loadComments(postId);
            }
            
            return newState;
        });
    };

    // Load comments for a specific post
    const loadComments = async (postId) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API}/api/jurnal/getComments/${postId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            if (!response.ok) {
                throw new Error('Failed to load comments');
            }
            
            const comments = await response.json();
            
            // Update the post's comments
            setPosts(prevPosts => 
                prevPosts.map(post => 
                    post._id === postId 
                        ? { ...post, comments: comments } 
                        : post
                )
            );
        } catch (error) {
            console.error("Error loading comments:", error);
            setCommentError(prev => ({
                ...prev,
                [postId]: 'Nu s-au putut încărca comentariile.'
            }));
        }
    };

    // Submit a comment (either anonymous or authenticated)
    const submitComment = async (postId) => {
        if (!commentText.trim()) {
            setCommentError(prev => ({
                ...prev,
                [postId]: 'Te rugăm să introduci un comentariu.'
            }));
            return;
        }
        
        setSubmittingComment(true);
        setCommentError(prev => ({ ...prev, [postId]: '' }));
        
        try {
            // Different endpoints and payload for anonymous vs authenticated
            let endpoint = `${process.env.REACT_APP_API}/api/jurnal/comment`;
            let payload = {
                jurnalId: postId,
                comment: commentText
            };
            let headers = {
                'Content-Type': 'application/json'
            };
            
            if (user) {
                // Authenticated comment
                headers['Authorization'] = `Bearer ${user.token}`;
                payload = {
                    jurnalId: postId,
                    comment: commentText,
                    username: user.username,
                };
            } else {
                // Anonymous comment
                endpoint = `${process.env.REACT_APP_API}/api/jurnal/comment/anonymous`;
            }
            
            console.log(endpoint);
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(payload)
            });
            
            const data = await response.json();
            
            if (response.ok) {
                // Clear the form
                setCommentText('');
                
                // Show success message
                setCommentError(prev => ({
                    ...prev,
                    [postId]: 'Comentariul a fost adăugat cu succes!'
                }));
                
                // Reload comments
                loadComments(postId);
                
                // Clear success message after 3 seconds
                setTimeout(() => {
                    setCommentError(prev => ({ ...prev, [postId]: '' }));
                }, 3000);
            } else {
                setCommentError(prev => ({
                    ...prev,
                    [postId]: data.error || 'Eroare la adăugarea comentariului.'
                }));
            }
        } catch (error) {
            console.error("Error submitting comment:", error);
            setCommentError(prev => ({
                ...prev,
                [postId]: 'Eroare la adăugarea comentariului. Încearcă din nou.'
            }));
        } finally {
            setSubmittingComment(false);
        }
    };

    return (
        <div className="container mx-auto py-10 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-amber-800 font-serif">
                        Jurnal de Festival
                    </h1>
                    
                    {user?.username && (
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
                                key={post._id} 
                                id={post._id}
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
                                                <h3 className="font-semibold text-amber-900">{post.username.toUpperCase()}</h3>
                                                <div className="flex items-center text-amber-600 text-sm">
                                                    <FaCalendarAlt className="mr-1" />
                                                    <time>acum {formatDistanceToNow(new Date(post.createdAt), { 
                                                        locale: ro, 
                                                        addSuffix: false 
                                                    })}</time>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {user?.username && (
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
                                                    onClick={() => openImageViewer(img)}
                                                    className="aspect-video bg-amber-100 rounded-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-[1.02]"
                                                >
                                                    <img 
                                                        src={img.preview} 
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
                                                {post.likes.length}
                                            </span>
                                            <span className="flex items-center gap-1 cursor-pointer" onClick={() => toggleComments(post._id)}>
                                                <FaComments />
                                                {post.comments.length}
                                            </span>
                                        </div>
                                    </div>

                                    {showImageViewer && selectedImage && (
                                        <div 
                                            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                                            onClick={closeImageViewer}
                                        >
                                            <div 
                                                className="relative max-w-6xl max-h-full"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <img 
                                                    src={selectedImage.preview || selectedImage} 
                                                    alt="Imagine mărită"
                                                    className="max-w-full max-h-[90vh] object-contain"
                                                />
                                                
                                                <button 
                                                    className="absolute top-2 right-2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-colors"
                                                    onClick={closeImageViewer}
                                                >
                                                    <FaTimes className="text-xl" />
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                
                                {/* Post actions */}
                                <div className="grid grid-cols-3 border-t border-amber-100">
                                    <button 
                                        onClick={() => likeJurnal(post._id)}
                                        className="py-3 flex justify-center items-center gap-2 hover:bg-amber-50 transition-colors text-amber-700"
                                    >
                                        <FaHeart className={post.likes?.includes(user?.username) ? "text-red-500" : ""} /> 
                                        Like
                                    </button>
                                    <button 
                                        className="py-3 flex justify-center items-center gap-2 hover:bg-amber-50 transition-colors text-amber-700 border-l border-r border-amber-100"
                                        onClick={() => toggleComments(post._id)}
                                    >
                                        <FaComments /> Comentează
                                    </button>
                                    <button 
                                        onClick={() => handleShare(post._id)}
                                        className="py-3 flex justify-center items-center gap-2 hover:bg-amber-50 transition-colors text-amber-700"
                                    >
                                        <FaShare /> Distribuie
                                    </button>
                                </div>

                                {showComments[post._id] && (
                                    <div className="border-t border-amber-100 bg-amber-50/50">
                                        <div className="p-4">
                                            <h4 className="text-amber-900 font-medium mb-4 flex items-center gap-2">
                                                <FaComments className="text-amber-700" />
                                                Comentarii ({post.comments?.length || 0})
                                            </h4>
                                            
                                            {/* Comment form */}
                                            <div className="mb-6">
                                                <div className="flex items-start gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-amber-200 flex items-center justify-center overflow-hidden flex-shrink-0">
                                                        {user ? (
                                                            <span className="font-bold text-amber-800">{user.username.charAt(0).toUpperCase()}</span>
                                                        ) : (
                                                            <FaUser className="text-amber-700 text-sm" />
                                                        )}
                                                    </div>
                                                    <div className="flex-grow">
                                                        <textarea
                                                            value={commentText}
                                                            onChange={(e) => setCommentText(e.target.value)}
                                                            placeholder="Adaugă un comentariu..."
                                                            className="w-full border border-amber-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white text-amber-900 placeholder-amber-400/70 resize-none h-20"
                                                        ></textarea>
                                                        
                                                        {!user && (
                                                            <div className="mt-2 flex items-center gap-2">
                                                                <FaUser className="text-amber-400 text-xs" />
                                                                <input
                                                                    type="text"
                                                                    value="Anonim"
                                                                    placeholder="Nume"
                                                                    className="border border-amber-200 rounded p-1 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white text-amber-900 placeholder-amber-400/70"
                                                                />
                                                            </div>
                                                        )}
                                                        
                                                        {/* {commentError[post._id] && (
                                                            <div className={`mt-2 text-sm p-2 rounded ${
                                                                commentError[post._id].includes('succes') 
                                                                    ? 'bg-green-100 text-green-800' 
                                                                    : 'bg-red-100 text-red-800'
                                                            }`}>
                                                                {commentError[post._id]}
                                                            </div>
                                                        )} */}
                                                        
                                                        <button
                                                            onClick={() => submitComment(post._id)}
                                                            disabled={submittingComment}
                                                            className={`px-4 py-2 rounded 
                                                                ${submittingComment 
                                                                    ? 'bg-amber-500/50 text-white cursor-not-allowed' 
                                                                    : 'bg-amber-600 hover:bg-amber-500 text-white'}
                                                                flex items-center gap-2 transition-colors`}
                                                        >
                                                            {submittingComment ? (
                                                                <>
                                                                    <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                                                                    Se trimite...
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <FaPaperPlane className="text-sm" />
                                                                    Trimite
                                                                </>
                                                            )}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {/* Comments list */}
                                            <div className="space-y-4">
                                                {post.comments && post.comments.length > 0 ? (
                                                    post.comments.map((comment, idx) => (
                                                        <div key={idx} className="flex gap-3">
                                                            <div className="w-8 h-8 rounded-full bg-amber-200 flex items-center justify-center overflow-hidden flex-shrink-0">
                                                                {comment.isAuthenticated ? (
                                                                    <span className="font-bold text-amber-800">{comment.username.charAt(0).toUpperCase()}</span>
                                                                ) : (
                                                                    <FaUser className="text-amber-700 text-sm" />
                                                                )}
                                                            </div>
                                                            <div className="flex-grow">
                                                                <div className="bg-white p-3 rounded-lg shadow-sm border border-amber-100">
                                                                    <div className="flex justify-between items-center mb-1">
                                                                        <span className={`font-medium ${comment.isAuthenticated ? 'text-amber-800' : 'text-amber-600'}`}>
                                                                            {comment.username}
                                                                            {comment.isAuthenticated && (
                                                                                <span className="ml-2 text-xs bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded">
                                                                                    Autentificat
                                                                                </span>
                                                                            )}
                                                                        </span>
                                                                        <span className="text-amber-400 text-xs">
                                                                            {comment.createdAt && formatDistanceToNow(new Date(comment.createdAt), { 
                                                                                locale: ro, 
                                                                                addSuffix: true 
                                                                            })}
                                                                        </span>
                                                                    </div>
                                                                    <p className="text-amber-900 whitespace-pre-line">{comment.comment}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <div className="text-center py-6 text-amber-600">
                                                        <FaComments className="mx-auto mb-2 text-2xl opacity-40" />
                                                        <p>Nu există comentarii încă. Fii primul care comentează!</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}
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