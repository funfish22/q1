import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router';

import '../../../../../reset.css';
import List from '../List';

storiesOf('atoms/List', module).add('default', () => (
    <MemoryRouter>
        <ul>
            <List title="第一導航" href="/" />
        </ul>
    </MemoryRouter>
));
