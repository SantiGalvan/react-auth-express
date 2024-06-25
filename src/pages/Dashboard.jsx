import { useState } from "react";
import DashboardCard from "../components/Cards/DashboardCard";
import { useAuth } from "../contexts/AuthContext";
import Modal from "../components/Modal/Modal";

const Dashboard = () => {

    const { user, logout } = useAuth();

    const [logoutMode, setLogoutMode] = useState(false);

    const userLogout = () => { }

    return (
        <section className="container">
            <DashboardCard user={user} clickLogout={() => setLogoutMode(true)} />
            {logoutMode &&
                <Modal
                    isShow={logoutMode}
                    closeModal={() => setLogoutMode(false)}
                    title={user?.name}
                    clickLogout={logout}
                />}
        </section>
    )
}

export default Dashboard;