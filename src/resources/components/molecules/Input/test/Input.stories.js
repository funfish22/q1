import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../../../../reset.css';
import Input from '../Input';

storiesOf('molecules|Input', module).add('default', () => <Input title="帳號" />);
