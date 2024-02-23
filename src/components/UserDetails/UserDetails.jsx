import UserInfoItem from "../UserInfoItem/UserInfoItem";

import './UserDetails.css';

export default function UserDetails({ user }) {
    return (
        <div className="user-details">
            <div className="cover">
                <img />
            </div>
            <div className="user-content">
                <div className="user-img-large">
                    <img src={user.img} />
                </div>
                <div className="username">{user.name}</div>
                <div className={user.status === 'active' ? 'status status-active' : 'status status-blocked'}>
                    {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                </div>
                <hr></hr>
                <ul className="user-info">
                    <li>
                        <UserInfoItem
                            icon=''
                            attribute='Customer ID'
                            value={user.id} />
                    </li>
                    <li>
                        <UserInfoItem
                            icon=''
                            attribute='Email'
                            value={user.email} />
                    </li>
                    <li>
                        <UserInfoItem
                            icon=''
                            attribute='Address'
                            value={user.address} />
                    </li>
                    <li>
                        <UserInfoItem
                            icon=''
                            attribute='Phone number'
                            value={user.phone} />
                    </li>
                    <li>
                        <UserInfoItem
                            icon=''
                            attribute='Last online'
                            value={getLastOnline(user.lastOnline)} />
                    </li>
                </ul>
            </div>
        </div>
    );
}

function getLastOnline(date) {
    date = new Date(date).getTime();
    const now = new Date().getTime();
    const diff = (now - date) / (1000 * 3600 * 24);

    if (diff < 1) {
        return 'Today';
    } else if (diff < 30) {
        return Math.floor(diff) > 1 ? Math.floor(diff) + ' days ago' : Math.floor(diff) + ' day ago';
    } else if (diff > 30 && diff < 365) {   
        return Math.floor(diff / 30) > 1 ? Math.floor(diff / 30) + ' months ago' : Math.floor(diff / 30) + ' month ago';
    } else {
        return Math.floor(diff / 365) > 1 ? Math.floor(diff / 365) + ' years ago' : Math.floor(diff / 365) + ' year ago';
    }
}