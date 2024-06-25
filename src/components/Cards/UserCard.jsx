import userCardStyle from './UserCard.module.scss';
import { FaTrashAlt } from "react-icons/fa";

const UserCard = ({ user }) => {

    const logo = () => {
        const logo = user.name.split('').filter(l => l !== l.toLowerCase());
        return logo;
    }

    return (
        <div className="card">
            <div className="card-body text-center">
                <div className={userCardStyle.logo}>{logo()}</div>
                <h3>{user.name}</h3>
                <div className="row">
                    <h4>Ruolo</h4>

                    {(!user.isAdmin && !user.isOwner) && <div className="col-12">
                        <h6>User</h6>
                    </div>}

                    <div className={user.isOwner ? 'offset-3 col-3' : 'col-12'}>
                        {user.isAdmin && <h6>Admin</h6>}
                    </div>

                    <div className="col-3">
                        {user.isOwner && <h6>Owner</h6>}
                    </div>

                </div>
                <p className='mb-0'><strong>Email:</strong> {user.email}</p>
            </div>
            <div className="card-footer d-flex justify-content-center">
                <button
                    className='btn btn-danger d-flex align-items-center gap-1'>
                    <FaTrashAlt />Elimina
                </button>
            </div>
        </div>
    )
}

export default UserCard;