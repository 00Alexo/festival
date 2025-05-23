import { useParams, Link } from "react-router-dom";
import Editie from "../components/Editie";
import { FaExclamationTriangle, FaArrowLeft, FaHome } from "react-icons/fa";

const Editii = () => {
    const editii = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const {editie} = useParams();
    console.log(editie);

    if(!editii.includes(parseInt(editie))) {
        return (
             <div className="container mx-auto py-16 px-4">
                <div className="max-w-lg mx-auto bg-amber-50 border border-amber-200 rounded-xl shadow-lg p-8">
                    <div className="flex items-center justify-center mb-6">
                        <div className="bg-amber-100 p-4 rounded-full">
                            <FaExclamationTriangle className="text-amber-600 text-4xl" />
                        </div>
                    </div>
                    
                    <h1 className="text-3xl font-bold text-amber-800 mb-4 font-serif text-center">
                        Ediția {editie} nu există!
                    </h1>
                    
                    <p className="text-amber-700 text-center mb-8">
                        Ne pare rău, dar ediția pe care o cauți nu este disponibilă. 
                        Momentan avem informații despre edițiile 1-9 ale festivalului.
                    </p>
                    
                    <div className="grid grid-cols-3 gap-2 mb-8">
                        {editii.map(nr => (
                            <Link 
                                key={nr} 
                                to={`/editii/${nr}`}
                                className="bg-amber-200 hover:bg-amber-300 text-amber-800 py-2 px-3 rounded-lg text-center font-medium transition-colors"
                            >
                                Ediția {nr}
                            </Link>
                        ))}
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

    return (
        <div>
            <Editie editie={editie} />
        </div>
    );
}
 
export default Editii;