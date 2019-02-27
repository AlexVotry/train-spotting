import React from 'react';
import { DB } from './data';
import distance from './getDistance';


test('when distance method recieves route responds with correct distance', () => {
  expect(distance('A-B-C', DB)).toEqual(`The total distance is 9 miles`);
  expect(distance('A-D', DB)).toEqual(`The total distance is 5 miles`);
  expect(distance('A-D-C', DB)).toEqual(`The total distance is 13 miles`);
  expect(distance('A-E-B-C-D', DB)).toEqual(`The total distance is 22 miles`);
  expect(distance('A-E-D')).toEqual('NO SUCH ROUTE');
  expect(distance('123')).toEqual('NO SUCH ROUTE');
});
