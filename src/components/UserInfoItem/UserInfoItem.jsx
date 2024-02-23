import './UserInfoItem.css';

export default function UserInfoItem({ icon, attribute, value }) {
    return (
        <div className="user-info-item">
            <div className="attr-icon">
                <img src={icon} />
            </div>
            <div className="column">
                <span className="attr-name">{attribute}</span>
                <span className="attr-val">{value}</span>
            </div>
        </div>
    );
}