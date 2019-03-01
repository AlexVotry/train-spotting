import React from 'react';
import inputs from './fields';

test('when sent value it adds to the form', () => {

  expect(inputs.max(['a', 'c', 3])).toEqual([
    {
      name: 'start',
      label: 'Starting Depot',
      value: 'a',
    },
    {
      name: 'end',
      label: 'Ending Depot',
      value: 'c',
    },
    {
      name: 'stops',
      label: 'Amount of Stops',
      value: 3,
    }
  ])
})
