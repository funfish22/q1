import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router';

import '../../../../../reset.css';
import Layout from '../Layout';

storiesOf('tempaltes/Layout', module).add('default', () => (
    <MemoryRouter>
        <Layout />
    </MemoryRouter>
));
