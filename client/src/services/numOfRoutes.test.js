import React from 'react';
import { DB } from './data';
import numOfRoutes from './numOfRoutes';


test('finds the number of routes from start to end less than the distance provided', () => {
  const result = numOfRoutes('c', 'c', 30, DB);
  expect(result.count).toEqual(7);
  // expect(t.numberOfRoutes('b', 'c', 30)).toEqual(?);
})
