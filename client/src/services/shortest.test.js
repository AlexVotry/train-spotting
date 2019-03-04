import React from 'react';
import { DB } from './data';
import shortest from './shortest';


test('finds the length of shortest route when provided start and end', () => {
  const ac = shortest.dist('a', 'c', DB);
  const ad = shortest.dist('a', 'd', DB);
  const bb = shortest.dist('b', 'b', DB);
  const de = shortest.dist('d', 'e', DB);
  const fe = shortest.dist('f', 'e', DB);
  const df = shortest.dist('d', 'f', DB);

  expect(ac.distance).toEqual(9);
  expect(ad.distance).toEqual(5);
  expect(bb.distance).toEqual(9);
  expect(de.distance).toEqual(6);
  expect(fe.distance).toEqual('NO SUCH ROUTE');
  expect(df.distance).toEqual('NO SUCH ROUTE');
})
