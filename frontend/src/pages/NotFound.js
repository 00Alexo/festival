import React from 'react';
import { Link } from 'react-router-dom';
import { FaTheaterMasks, FaHome, FaArrowLeft, FaSearch } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="container mx-auto py-16 px-4 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl w-full bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-amber-700 to-orange-600 px-8 py-6">
          <div className="flex items-center justify-center">
            <FaTheaterMasks className="text-amber-100 text-5xl" />
          </div>
        </div>
        
        <div className="p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-6 font-serif text-center">
            Pagină inexistentă
          </h1>
          
          <div className="flex justify-center mb-8">
            <div className="text-8xl font-bold text-orange-600/30">404</div>
          </div>
          
          <p className="text-amber-800 text-center text-lg mb-4">
            Ne pare rău, dar pagina pe care o cauți nu este disponibilă.
          </p>
          
          <p className="text-amber-600 text-center mb-8">
            Este posibil ca pagina să fi fost mutată, ștearsă sau să nu fi existat niciodată.
          </p>
          
          <div className="space-y-4 md:space-y-0 md:flex md:justify-center md:gap-4">
            <Link 
              to="/" 
              className="flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-600 text-white py-3 px-6 rounded-lg transition-colors w-full md:w-auto"
            >
              <FaHome /> Pagina principală
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white py-3 px-6 rounded-lg transition-colors w-full md:w-auto"
            >
              <FaArrowLeft /> Înapoi
            </button>
          </div>
          
          <div className="mt-8 text-center">
            <h3 className="text-amber-700 font-medium mb-3">
              Sau încearcă una din aceste pagini:
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/" className="text-amber-600 hover:text-amber-800 hover:underline">
                Acasă
              </Link>
              <Link to="/editii/9" className="text-amber-600 hover:text-amber-800 hover:underline">
                Ediția curentă
              </Link>
              <Link to="/galerie" className="text-amber-600 hover:text-amber-800 hover:underline">
                Galerie
              </Link>
              <Link to="/regulament" className="text-amber-600 hover:text-amber-800 hover:underline">
                Regulament
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;