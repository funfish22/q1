import styled from 'styled-components';
import List from '@components/atoms/List';

const Menu = (props) => {
    const { menuList } = props;

    return (
        <MenuRoot>
            {!!menuList &&
                menuList.map((row, index) => {
                    return <List key={index} title={row.title} href={row.href} icon={row.icon} />;
                })}
        </MenuRoot>
    );
};

export default Menu;

const MenuRoot = styled.ul`
    display: inline-flex;
    flex-direction: column;
`;
