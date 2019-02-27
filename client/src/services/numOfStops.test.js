import React from 'react';
import { DB } from './data';
import numOfStops from './numOfStops';

test('when maxTrips method recieves start, end, and stops, responds with correct amount of routes', () => {

  expect(numOfStops.max('C', 'C', 3, DB)).toEqual(2);
});

test('when exactTrips method recieves start, end, and stops, responds with correct amount of routes', () => {

  expect(numOfStops.exact('A', 'C', 4, DB)).toEqual(3);
  expect(numOfStops.exact('A', 'C', 2, DB)).toEqual(2);
  expect(numOfStops.exact('A', 'C', 5, DB)).toEqual(2);
});
