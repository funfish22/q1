import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../../../../reset.css';
import Button from '../Button';

storiesOf('atoms/Button', module).add('default', () => <Button name="123" />);
