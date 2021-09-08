import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import '../../../../../reset.css';
import Menu from '../Menu';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

const menuList = [
    { title: '個人資訊管理', href: '/', icon: faUser },
    { title: '會員管理', href: '/', icon: faUsers },
];

storiesOf('molecules/Menu', module).add('default', () => (
    <MemoryRouter>
        <Menu menuList={menuList} />
    </MemoryRouter>
));
