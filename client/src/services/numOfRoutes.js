import _ from 'lodash';
import shortest from './shortest';

export default (s, e, maxDist, routes) => {
    let count = 0;
    let start = s.toLowerCase();
    let end = e.toLowerCase();
    let startEnd = shortest.getStart_End(start, end, routes, count);
    let starts = startEnd.start;
    count = startEnd.count;
    let result = _getNextMaxTripDist(starts, end, maxDist, count, routes);

    return result;
  }

  function _getNextMaxTripDist(starts, end, maxDist, count, routes) {
    let newKey;
    let validRoutes = [];

    while (!_.isEmpty(starts)) {
      let nextStart = {};
      _.mapKeys(starts, (value, key) => {
        if (key.substr(-1) === end) {
          count++;
          validRoutes.push({ route: key, distance: value });
        }

        _.forEach(routes, route => {
          if  (key.substr(-1) === route.start) {
            newKey = `${key}${route.end}`;
            let routeDist = starts[key] + route.distance;
            if (routeDist < maxDist) {
              nextStart[newKey] = routeDist;
            }
          }
        });
      });

      starts = {};
      _.assign(starts, nextStart);
    }

    return { count: count, validRoutes: validRoutes };
    }
