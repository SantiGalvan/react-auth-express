import { useEffect, useState } from 'react';
import axios from '../../utils/axiosClient.js'
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import UserCard from '../../components/Cards/UserCard.jsx';

const Users = () => {

    const [users, setUsers] = useState([]);

    const navigate = useNavigate();

    const fetchUsers = async () => {
        const res = await axios.get('/auth/users');
        setUsers(res.data);
    }

    useEffect(() => {
        fetchUsers()
    }, []);

    return (
        <section className='container'>
            <div className="row g-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <button
                        onClick={() => navigate(-1)}
                        className="btn btn-secondary h-75 d-flex align-items-center justify-content-center gap-1">
                        <FaArrowLeft />Torna indietro
                    </button>
                    <h1 className="mb-2">Users</h1>
                </div>
                {users.map((user, index) => (
                    <div className='col-4' key={`user-${index}`}>
                        <UserCard
                            user={user}
                        />
                    </div>
                ))}
            </div>
        </section >
    )
}

export default Users;