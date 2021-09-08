import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
    const { show, handleChangeMenu } = props;
    return (
        <HeaderRoot style={{ display: show ? 'flex' : 'none' }}>
            <Logo src="https://fakeimg.pl/300x120/?retina=1&text=LOGO&font=noto" alt="logo" />
            <MenuIcon icon={faBars} size="2x" onClick={handleChangeMenu} />
        </HeaderRoot>
    );
};

export default Header;

const HeaderRoot = styled.div`
    background: rgba(0, 0, 0, 0) linear-gradient(to right, #667eea 0%, #0477d4 100%) repeat scroll 0 0;
    padding: 10px 20px;
    display: flex;
    align-items: center;
`;

const Logo = styled.img`
    max-width: 150px;
    max-height: 60px;
    height: auto;
`;

const MenuIcon = styled(FontAwesomeIcon)`
    cursor: pointer;
    margin-left: 16px;
`;
