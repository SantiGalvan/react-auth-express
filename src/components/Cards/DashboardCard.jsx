import { NavLink } from 'react-router-dom';
import createImg from '../../assets/img/writing-development.png';
import postsImg from '../../assets/img/blog.png';
import categoriesImg from '../../assets/img/categories.png';
import tagsImg from '../../assets/img/tag.png';
import usersImg from '../../assets/img/user.png';
import logoutImg from '../../assets/img/logout.png';
import dashboardCardStyle from './DashboardCard.module.scss';
import { useAuth } from '../../contexts/AuthContext';


const DashboardCard = ({ user }) => {

    const { logout } = useAuth()

    return (
        <div className="card">
            <div className="card-header text-center">
                <h1>{user.name}</h1>
            </div>
            <div className="card-body p-4">
                <div className="row">

                    <div className="col-4 text-center">
                        <NavLink to={'/posts/create'} className={dashboardCardStyle.link}>
                            <figure className={dashboardCardStyle.post}>
                                <img src={createImg} alt="Crea Post" className='img-fluid' />
                            </figure>
                            <h3>Crea un nuovo Post</h3>
                        </NavLink>
                    </div>

                    <div className="col-4 text-center">
                        <div className="row g-4">

                            <div className={user.isAdmin ? 'col-6' : 'col-12 text-center'}>
                                <NavLink className={dashboardCardStyle.link} to={'/posts'}>
                                    <figure className={user.isAdmin ? dashboardCardStyle.image : dashboardCardStyle.post}>
                                        <img src={postsImg} alt="Posts" className='img-fluid' />
                                    </figure>
                                    <h4>Posts</h4>
                                </NavLink>
                            </div>

                            {user.isAdmin && <>
                                <div className='col-6'>
                                    <NavLink className={dashboardCardStyle.link} to={''}>
                                        <figure className={dashboardCardStyle.image}>
                                            <img src={categoriesImg} alt="Posts" className='img-fluid' />
                                        </figure>
                                        <h4>Categorie</h4>
                                    </NavLink>
                                </div>

                                <div className={user.isOwner ? 'col-6' : 'col-12 text-center'}>
                                    <NavLink className={dashboardCardStyle.link} to={''}>
                                        <figure className={dashboardCardStyle.image}>
                                            <img src={tagsImg} alt="Posts" className='img-fluid' />
                                        </figure>
                                        <h4>Tags</h4>
                                    </NavLink>
                                </div>

                                {user.isOwner &&
                                    <div className='col-6'>
                                        <NavLink className={dashboardCardStyle.link} to={''}>
                                            <figure className={dashboardCardStyle.image}>
                                                <img src={usersImg} alt="Posts" className='img-fluid' />
                                            </figure>
                                            <h4>Users</h4>
                                        </NavLink>
                                    </div>}
                            </>}

                        </div>
                    </div>

                    <div className="col-4 text-center">
                        <NavLink to={''} onClick={logout} className={dashboardCardStyle.link}>
                            <figure className={dashboardCardStyle.post}>
                                <img src={logoutImg} alt="Crea Post" className='img-fluid' />
                            </figure>
                            <h3>Logout</h3>
                        </NavLink>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DashboardCard;