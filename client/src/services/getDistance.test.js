import React from 'react';
import { DB } from './data';
import distance from './getDistance';


test('when distance method recieves route responds with correct distance', () => {

  const abd = distance('A-B-C', DB);
  const ad = distance('ad', DB);
  const adc = distance('a-d-c', DB);
  const aebce = distance('AEBCd', DB);
  const aed = distance('A-E-D', DB);
  const _123 = distance('123', DB);

  expect(abd.totalDistance).toEqual(9);
  expect(ad.totalDistance).toEqual(5);
  expect(adc.totalDistance).toEqual(13);
  expect(aebce.totalDistance).toEqual(22);
  expect(aed.totalDistance).toEqual('NO SUCH ROUTE');
  expect(_123.totalDistance).toEqual('NO SUCH ROUTE');
});
