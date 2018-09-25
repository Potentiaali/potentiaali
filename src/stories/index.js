import React from 'react';

import { storiesOf } from '@storybook/react';
import { Accordion } from '../components/Accordion';
storiesOf('Accordion', module)
  .add('Single accordion, with text', () => <Accordion title="Accordion">Hello world!</Accordion>)
  .add('Multiple accordions, with text', () => (
    <React.Fragment>
      <Accordion title="Accordion 1">Hello world!</Accordion>
      <Accordion title="Accordion 2">Hello world!</Accordion>
      <Accordion title="Accordion 3">Hello world!</Accordion>
    </React.Fragment>
  ));
