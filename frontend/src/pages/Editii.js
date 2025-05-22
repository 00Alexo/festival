import { useParams } from "react-router-dom";
import Editie from "../components/Editie";


const Editii = () => {
    const editii = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const {editie} = useParams();
    console.log(editie);

    if(!editii.includes(parseInt(editie))) {
        return (
            <div>
                <h1 className="text-3xl font-bold text-amber-800 mb-6 font-serif">
                    Ediția {editie} nu există!
                </h1>
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