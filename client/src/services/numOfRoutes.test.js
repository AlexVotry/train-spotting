import React from 'react';
import { DB } from './data';
import numOfRoutes from './numOfRoutes';


test('finds the number of routes from start to end less than the distance provided', () => {

  expect(numOfRoutes('c', 'c', 30, DB)).toEqual(7);
  // expect(t.numberOfRoutes('b', 'c', 30)).toEqual(?);
})
