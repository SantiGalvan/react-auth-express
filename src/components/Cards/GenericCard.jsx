import { FaTrashAlt, FaPencilAlt, FaPlus } from "react-icons/fa";

const GenericCard = ({ label, color }) => {
    return (
        <div className="card" style={{ backgroundColor: color }}>
            <div className="card-header text-center">
                <h3>{label}</h3>
            </div>
            <div className="card-footer d-flex justify-content-center gap-3">
                <button className="btn btn-sm btn-warning d-flex align-items-center gap-1" ><FaPencilAlt />Modifica</button>
                <button className="btn btn-sm btn-danger d-flex align-items-center gap-1" ><FaTrashAlt />Elimina</button>
            </div>
        </div>
    )
}

export default GenericCard;