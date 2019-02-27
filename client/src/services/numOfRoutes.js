import _ from 'lodash';
import shortest from './shortest';

export default (s, e, maxDist, routes) => {
    let starts = {};
    let ends = {};
    let count = 0;
    let start = s.toLowerCase();
    let end = e.toLowerCase();
    let startEnd = shortest.getStart_End(start, end, routes, count);
    starts = startEnd.start;
    ends = startEnd.end;
    count = startEnd.count;
    count = _getNextMaxTripDist(starts, ends, maxDist, count, routes);

    return count;
  }

  function _getNextMaxTripDist(starts, ends, maxDist, count, routes) {
      let nextStart = {};
      let tax = 1;
      while (!_.isEmpty(starts)) {
        _.mapKeys(starts, (value, key) => {
          if (key === 'c') count++;
        });

        // get next group of routes and add distance.
        nextStart = {};
        _.forEach(routes, route => {
          if (starts[route.start]) {
            let routeDist = starts[route.start] + route.distance;
            if (routeDist < maxDist) {
              nextStart[route.end] = routeDist;
            }
          }

        });

        starts = {};
        _.assign(starts, nextStart);
      }

      return count;
    }
