import Navbar from '../components/Navbar'
import StatCard from '../components/StatCard';
import '../styles/Dashboard.css'
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import RecommendOutlinedIcon from '@mui/icons-material/RecommendOutlined';
import PetsIcon from '@mui/icons-material/Pets';
import Footer from '../components/Footer';
import SAMPLE_NOTIFICATIONS from '../constants/SampleNotifications'

export default function Dashboard() {


    return (
        <main className="Dashboard">
            <Navbar />
            <section className="ContentContainer">
                <h1 className="UserPageTitle">Dashboard</h1>
                <article className="Statistics">
                    <StatCard
                        className="Pending"
                        icon={PendingActionsIcon}
                        label="Pending Applications"
                        number={5}
                    />
                    <StatCard
                        className="Approved"
                        icon={RecommendOutlinedIcon}
                        label="Approved Applications"
                        number={3}
                    />
                    <StatCard
                        className="Saved"
                        icon={PetsIcon}
                        label="Saved Pets"
                        number={18}
                    />
                </article>
                <table className="RecentTbl">
                    <thead>
                        <tr className="TblTitle">
                            <th colSpan={2}>Recent Activity</th>
                        </tr>
                    </thead>
                    <tbody>{SAMPLE_NOTIFICATIONS.map((n) => (
                        <tr key={n.id}>
                            <td>{
                                new Date(n.date * 1000).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "2-digit"
                                })
                            }</td>
                            <td>{n.title}</td>
                        </tr>
                    ))}</tbody>
                </table>
            </section>
            <Footer />
        </main>
    )

}

