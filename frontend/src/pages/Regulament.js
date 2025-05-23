import { FaArrowLeft, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Regulament = () => {
    return (
        <div>
            <div className="container mx-auto py-16 px-4">
                <div className="max-w-lg mx-auto bg-amber-50 border border-amber-200 rounded-xl shadow-lg p-8">
                    <h1 className="text-3xl font-bold text-amber-800 mb-4 font-serif text-center">
                        Regulament
                    </h1>
                    <p className="text-amber-700 text-center mb-8">
                        Momentan regulamentul nu este disponibil. Te rugăm să revii mai târziu pentru a-l consulta.
                    </p>
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
    );
}
 
export default Regulament;