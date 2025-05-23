import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaImage, FaTimes, FaArrowLeft, FaPaperPlane } from 'react-icons/fa';
import { useAuthContext } from '../Hooks/useAuthContext';

const JurnalUpload = () => {
    const { user } = useAuthContext();
    const [content, setContent] = useState('');
    const [images, setImages] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState('');
    const fileInputRef = useRef(null);
    const navigate = useNavigate();

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleImageSelect = (e) => {
        const files = Array.from(e.target.files);
        
        if (images.length + files.length > 3) {
            setError('Poți încărca maximum 3 imagini.');
            return;
        }
        
        setError('');
        
        // Process each file and convert to base64
        files.slice(0, 3 - images.length).forEach(file => {
            const reader = new FileReader();
            
            reader.onload = (e) => {
                // When the file is read, add it to the images array
                setImages(prevImages => [
                    ...prevImages, 
                    {
                        id: Date.now() + Math.random(),
                        //file: file,
                        preview: e.target.result // This is the base64 string
                    }
                ]);
            };
            
            // Read the file as a data URL (base64)
            reader.readAsDataURL(file);
        });
    };

    const removeImage = (id) => {
        setImages(images.filter(img => img.id !== id));
    };

    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!content.trim() || images.length === 0) {
            setError('Te rugăm să adaugi conținutul postării.');
            return;
        }
        
        setUploading(true);
        
        try {
            console.log(content, images, user.username);

            const response = await fetch(`${process.env.REACT_APP_API}/api/jurnal/uploadJurnal`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${user.token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    content,
                    images,
                    username: user.username
                })
            });

            if (!response.ok) {
                throw new Error('Failed to upload post');
            }

            setUploading(false);
            navigate('/jurnal');
        } catch (error) {
            setError('A apărut o eroare la încărcarea postării. Te rugăm să încerci din nou.');
            setUploading(false);
        }
    };

    if(!user) {
        return (
            <div className="container mx-auto py-10 px-4">
                <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-amber-100">
                    <div className="bg-gradient-to-r from-amber-700 to-orange-600 p-4 text-white flex items-center justify-between">
                        <h1 className="text-xl font-bold flex items-center gap-2">
                            <FaPaperPlane /> Adaugă o postare nouă
                        </h1>
                    </div>
                    <div className="p-5">
                        <p className="text-red-500">Te rugăm să te autentifici pentru a adăuga o postare.</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-10 px-4">
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-amber-100" id="upload">
                <div className="bg-gradient-to-r from-amber-700 to-orange-600 p-4 text-white flex items-center justify-between">
                    <h1 className="text-xl font-bold flex items-center gap-2">
                        <FaPaperPlane /> Adaugă o postare nouă
                    </h1>
                    <Link 
                        to="/jurnal"
                        className="flex items-center gap-1 bg-white/20 hover:bg-white/30 transition-colors rounded-md py-1 px-3"
                    >
                        <FaArrowLeft /> Înapoi
                    </Link>
                </div>
                
                <form onSubmit={handleSubmit} className="p-5">
                    {error && (
                        <div className="bg-red-50 text-red-700 p-3 rounded-lg mb-4 border border-red-200">
                            {error}
                        </div>
                    )}
                    
                    <div className="mb-5">
                        <label htmlFor="content" className="block font-medium text-amber-800 mb-2">
                            Ce vrei să împărtășești?
                        </label>
                        <textarea
                            id="content"
                            value={content}
                            onChange={handleContentChange}
                            className="w-full min-h-[200px] p-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                            placeholder="Scrie postarea ta aici..."
                        ></textarea>
                    </div>
                    
                    <div className="mb-5">
                        <label className="block font-medium text-amber-800 mb-2">
                            Adaugă imagini (maximum 3)
                        </label>
                        
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleImageSelect}
                            accept="image/*"
                            multiple
                            className="hidden"
                        />
                        
                        <div className="grid grid-cols-3 gap-3 mb-3">
                            {images.map(img => (
                                <div key={img.id} className="relative aspect-square bg-amber-100 rounded-lg overflow-hidden">
                                    <img 
                                        src={img.preview} 
                                        alt="Preview" 
                                        className="w-full h-full object-cover"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => removeImage(img.id)}
                                        className="absolute top-1 right-1 bg-black/70 text-white p-1 rounded-full hover:bg-black/90 transition-colors"
                                    >
                                        <FaTimes />
                                    </button>
                                </div>
                            ))}
                            
                            {images.length < 3 && (
                                <button
                                    type="button"
                                    onClick={triggerFileInput}
                                    className="aspect-square bg-amber-50 rounded-lg border-2 border-dashed border-amber-300 flex flex-col items-center justify-center hover:bg-amber-100 transition-colors"
                                >
                                    <FaImage className="text-amber-600 text-2xl mb-2" />
                                    <span className="text-amber-700 text-sm font-medium">Adaugă imagine</span>
                                </button>
                            )}
                        </div>
                        
                        <p className="text-sm text-amber-600">
                            {3 - images.length} imagini disponibile
                        </p>
                    </div>
                    
                    <div className="border-t border-amber-100 pt-4 flex justify-end">
                        <button
                            type="submit"
                            disabled={uploading}
                            className={`flex items-center gap-2 py-2 px-6 rounded-lg text-white ${
                                uploading 
                                    ? 'bg-amber-400 cursor-not-allowed' 
                                    : 'bg-amber-700 hover:bg-amber-600'
                            } transition-colors`}
                        >
                            {uploading ? (
                                <>
                                    <span className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></span>
                                    Se încarcă...
                                </>
                            ) : (
                                <>
                                    <FaPaperPlane /> Publică
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default JurnalUpload;