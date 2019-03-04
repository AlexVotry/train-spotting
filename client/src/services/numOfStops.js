import _ from 'lodash';
import shortest from './shortest';

function max(start, end, stops, routes) {
  if (isNaN(stops)) return { count: 'NO SUCH ROUTE' };
  let count = 0;
  let validRoutes = [];
  for (let i = 1; i <= stops; i++) {
    let exactResults = exact(start, end, i, routes);
    if (isNaN(exactResults.count)) return { count: exactResults.count };
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
  let start = s.toLowerCase().match(/[a-d]/) ? s.toLowerCase() : null;
  let end = e.toLowerCase().match(/[b-e]/) ? e.toLowerCase() : null;
  if (!start || !end || isNaN(stops)) return { count: 'NO SUCH ROUTE' };
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
