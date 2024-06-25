import { useEffect, useState } from 'react';
import axios from '../../utils/axiosClient.js'
import UserCard from '../../components/Cards/UserCard.jsx';

const Users = () => {

    const [users, setUsers] = useState([]);

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
                <h1 className="mb-2 text-center">Users</h1>
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