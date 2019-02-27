import _ from 'lodash';

function dist(s, e, routes) {
    let starts = {};
    let ends = {};
    let start = s.toLowerCase();
    let end = e.toLowerCase();
    let dist = {};
    let checked = {};
    let startEnd = getStart_End(start, end, routes);
    starts = startEnd.start;
    ends = startEnd.end;

    if (!_.isEmpty(startEnd.dist)) {
      return startEnd.dist.dist;
    }
    let min;

    while (!min) {
      checked = _checkComplete(starts, ends);
      min = checked.min;
      dist = checked.dist;
      if (min) {
        return min;
      }
      starts = _getNextTripDist(starts, routes);
    }
  }

  function getStart_End(start, end, routes, count = 0) {
    let starts = {};
    let ends = {};
    let dist = {};

    _.forEach(routes, route => {
      if (route.start == start && route.end === end) {
        dist = { dist: route.distance };
        count++;
      }

      if (route.start === start) {
        starts[route.end] = route.distance;
      }

      if (route.end === end) {
        ends[route.start] = route.distance;
      }

    });

    return {start: starts, end: ends, dist: dist, count: count};
  }

  function _checkComplete(starts, ends) {
    let min;
    let dist = {};

    _.forEach(starts, (start, key) => {
      dist[key] = start + ends[key];
      if (!min || min > dist[key]) {
        min = dist[key]
      }
    });

    return {dist: dist, min: min};
  };

  function _getNextTripDist(starts, routes) {
    let nextStart = {};
    _.forEach(routes, route => {
      if (starts[route.start]) {
        nextStart[route.end] = starts[route.start] + route.distance;
      }
    });

    return nextStart;
  }

  export default {dist, getStart_End };
