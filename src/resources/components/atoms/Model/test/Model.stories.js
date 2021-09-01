import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../../../../reset.css';
import Model from '../Model';

storiesOf('atoms|Model', module).add('default', () => <Model maxWidth={510}>456</Model>);
