import Header from '@components/organisms/Header';
import Menu from '@components/molecules/Menu';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

const Layout = () => {
    const menuList = [
        { title: '個人資訊管理', href: '/', icon: faUser },
        { title: '會員管理', href: '/', icon: faUsers },
    ];
    return (
        <>
            <Header show />
            <Menu menuList={menuList} />
        </>
    );
};

export default Layout;
