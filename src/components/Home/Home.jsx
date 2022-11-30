import './Home.css';
import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <div className="home-page-header">
            <Link to='/chats-page'>
                <h2>Chats</h2>
            </Link>
            <Link to="/profile">
                <h2>Profile</h2>
            </Link>
        </div >
    )
}