import React from 'react';
import { DB } from './data';
import shortest from './shortest';


test('finds the length of shortest route when provided start and end', () => {
  const ac = shortest.dist('a', 'c', DB);
  const ad = shortest.dist('a', 'd', DB);
  const bb = shortest.dist('b', 'b', DB);
  const de = shortest.dist('d', 'e', DB);

  expect(ac.distance).toEqual(9);
  expect(ad.distance).toEqual(5);
  expect(bb.distance).toEqual(9);
  expect(de.distance).toEqual(6);
})
