import './Header.css';

export const Header = ({ chatId }) => {
    return (
        <div className="header">
            <h1>Chat room {chatId}</h1>
        </div>
    )
};

