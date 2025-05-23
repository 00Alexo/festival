const Galerie = () => {
    return (
        <div className="mt-16">
            <h1 className="text-4xl font-bold text-amber-800 mb-10 text-center font-serif">Galerie Foto</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {/* Add your images here */}
                <img src="path_to_image1.jpg" alt="Image 1" className="rounded-lg shadow-lg" />
                <img src="path_to_image2.jpg" alt="Image 2" className="rounded-lg shadow-lg" />
                <img src="path_to_image3.jpg" alt="Image 3" className="rounded-lg shadow-lg" />
                {/* Add more images as needed */}
            </div>
        </div>
    );
}
 
export default Galerie;