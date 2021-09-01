import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../../../../reset.css';
import Title from '../Title';

storiesOf('atoms|Title', module).add('default', () => <Title>123</Title>);
