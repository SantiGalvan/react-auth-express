import DashboardCard from "../components/Cards/DashboardCard";
import { useAuth } from "../contexts/AuthContext";

const Dashboard = () => {

    const { user } = useAuth();

    return (
        <section className="container">
            <DashboardCard user={user} />
        </section>
    )
}

export default Dashboard;