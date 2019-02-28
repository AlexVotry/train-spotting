import _ from 'lodash';
import shortest from './shortest';

function max(start, end, stops, routes) {
  let count = 0;
  let validRoutes = [];
  for (let i = 1; i <= stops; i++) {
    let exactResults = exact(start, end, i, routes);
    count += exactResults.count;
    if(!_.isEmpty(exactResults.routes)) {
      for (let i = 0; i < exactResults.routes.length; i++) {
        validRoutes.push(exactResults.routes[i]);
      }
    }
  }

  let result = { count: count, routes: validRoutes };
  return result;
}

function exact(s, e, stops, routes) {
  let validRoutes = [];
  let start = s.toLowerCase();
  let end = e.toLowerCase();
  let counter = 1;
  let count = 0;
  // TODO: move lines to 34 into _getNextTrip()
  let nextTrip = shortest.getStart_End(start, end, routes);
  let starts = nextTrip.start;
  nextTrip = starts;
  if (!_.isEmpty(nextTrip.route)) {
    validRoutes.push(nextTrip.route);
  }

  while (counter < stops) {
    nextTrip = _getNextTrip(starts, end, routes);
    starts = nextTrip;
    counter ++;
  }
  let keys = _.keysIn(nextTrip);
  _.forEach(keys, route => {
    if (route.substr(-1) === end){
      count++;
      validRoutes.push({ route: route, distance: nextTrip[route] });
    }
  });

  return { count: count, routes: validRoutes };
}

function _getNextTrip(starts, ends, routes) {
  let newKey;
  let nextStart = {};
  _.mapKeys(starts, (value, key) => {
    _.forEach(routes, route => {
      if  (key.substr(-1) === route.start) {
        newKey = `${key}${route.end}`;
        nextStart[newKey] = starts[key] + route.distance;
      }
    });
  })
  return nextStart;
}

export default { max, exact };
