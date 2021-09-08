import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import '../../../../../reset.css';
import Header from '../Header';

storiesOf('organisms/Header', module).add('default', () => (
    <MemoryRouter>
        <Header show />
    </MemoryRouter>
));