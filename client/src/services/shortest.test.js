import React from 'react';
import { DB } from './data';
import shortest from './shortest';


test('finds the length of shortest route when provided start and end', () => {

  expect(shortest.dist('a', 'c', DB)).toEqual(9);
  expect(shortest.dist('b', 'b', DB)).toEqual(9);
  expect(shortest.dist('d', 'e', DB)).toEqual(6);
})
