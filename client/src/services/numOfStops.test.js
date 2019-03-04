import React from 'react';
import { DB } from './data';
import numOfStops from './numOfStops';

test('when maxTrips method recieves start, end, and stops, responds with correct amount of routes', () => {

  const ab2 = numOfStops.max('A', 'B', 2, DB);
  const ab3 = numOfStops.max('A', 'b', 3, DB);
  const cc3 = numOfStops.max('c', 'C', 3, DB);
  const fc3 = numOfStops.max('F', 'C', 3, DB);
  const ca3 = numOfStops.max('C', 'a', 3, DB);
  const ccb = numOfStops.max('C', 'C', 'c', DB);

  expect(ab2.count).toEqual(2);
  expect(ab3.count).toEqual(3);
  expect(cc3.count).toEqual(2);
  expect(fc3.count).toEqual('NO SUCH ROUTE');
  expect(ca3.count).toEqual('NO SUCH ROUTE');
  expect(ccb.count).toEqual('NO SUCH ROUTE');
});

test('when exactTrips method recieves start, end, and stops, responds with correct amount of routes', () => {

  const ab1 = numOfStops.exact('A', 'B', 1, DB);
  const ac2 = numOfStops.exact('A', 'C', 2, DB);
  const ac5 = numOfStops.exact('A', 'C', 5, DB);
  const fc3 = numOfStops.exact('F', 'C', 3, DB);
  const ca3 = numOfStops.exact('C', 'a', 3, DB);
  const ccb = numOfStops.exact('C', 'C', 'c', DB);

  expect(ab1.count).toEqual(1);
  expect(ac2.count).toEqual(2);
  expect(ac5.count).toEqual(3);
  expect(fc3.count).toEqual('NO SUCH ROUTE');
  expect(ca3.count).toEqual('NO SUCH ROUTE');
  expect(ccb.count).toEqual('NO SUCH ROUTE');
});
