import './Profile.css';
import { Link } from "react-router-dom"

export const Profile = () => {
    return (
        <div className="profile-page-header">
            <h1>Profile page</h1>
            <div className='profile-page-header-right-block'>
                <Link className='profile-chats-icon' to="/chats-page">
                    <h2>Chats</h2>
                </Link>
                <Link className='profile-home-icon' to="/home">
                    <h2>Home</h2>
                </Link>
            </div>

        </div>
    )
}