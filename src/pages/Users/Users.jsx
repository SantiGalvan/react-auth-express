import { useEffect, useState } from 'react';
import axios from '../../utils/axiosClient.js'

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
            <ul>
                {users.map((user, index) => (<li key={`user-${index}`}>{user.name}</li>))}
            </ul>
        </section>
    )
}

export default Users;