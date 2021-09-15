import { Link } from 'react-router-dom';

const User = () => {
    return (
        <div>
            <Link to="/">首頁</Link>
            <Link to="/user">設定</Link>
        </div>
    );
};

export default User;
