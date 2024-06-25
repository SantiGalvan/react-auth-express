import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Navbar = () => {

    const { isLoggedIn, user } = useAuth();

    const logo = () => {
        const logo = user.name.split('').filter(l => l !== l.toLowerCase());
        return logo;
    }

    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="w-100 d-flex justify-content-center align-items-center">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to={'/'}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={'/posts'}>Posts</NavLink>
                        </li>

                        {user?.isOwner &&
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/users'}>Users</NavLink>
                            </li>
                        }

                        {isLoggedIn ?
                            <li className="nav-item">
                                <NavLink className="nav-link d-flex gap-2" to={'/dashboard'}>
                                    <span className="logo">{logo()}</span>
                                    {user.name}
                                </NavLink>
                            </li> :
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/login'}>Login</NavLink>
                            </li>
                        }
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;