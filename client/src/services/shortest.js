import _ from 'lodash';

function dist(s, e, routes) {
  let starts = {};
  let ends = {};
  let start = s.toLowerCase().match(/[a-d]/) ? s.toLowerCase() : null;
  let end = e.toLowerCase().match(/[b-e]/) ? e.toLowerCase() : null;
  if (!start || !end) return { distance: 'NO SUCH ROUTE' };
  let result = {};
  let startEnd = getStart_End(start, end, routes);
  starts = startEnd.start;
  ends = startEnd.end;
  if (!_.isEmpty(startEnd.route)) {
    return startEnd.route;
  }

  let min;

  while (!min) {
    result = _checkComplete(starts, ends, end);
    min = result.distance;
    if (min) {
      return result;
    }
    starts = _getNextTripDist(starts, routes);
  }
}

  function getStart_End(start, end, routes, count = 0) {
    let starts = {};
    let ends = {};
    let validRoute = {};
    let key;

    _.forEach(routes, route => {
      if (route.start === start && route.end === end) {
        validRoute = { route: `${route.start}${route.end}`, distance: route.distance };
        count++;
      }

      if (route.start === start) {
        key = `${start}${route.end}`;
        starts[key] = route.distance;
      }

      if (route.end === end) {
        ends[route.start] = route.distance;
      }

    });
    return {start: starts, end: ends, route: validRoute, count: count};
  }

  function _checkComplete(starts, ends, end) {
    let min;
    let newKey;
    let dist = {};
    let route = {};

    _.forEach(starts, (start, key) => {
      dist[key] = start + ends[key.substr(-1)];
      if (!min || min > dist[key]) {
        min = dist[key];
        newKey = `${key}${end}`;
        route = { route: newKey, distance: min };
      }
    });

    return route;
  };

  function _getNextTripDist(starts, routes) {
    let nextStart = {};
    let newKey;
    _.mapKeys(starts, (value, key) => {
      _.forEach(routes, route => {
        if (key.substr(-1) === route.start) {
          newKey = `${key}${route.end}`;
          nextStart[newKey] = starts[key] + route.distance;
        }
      });
    });

    return nextStart;
  }

  export default {dist, getStart_End };
