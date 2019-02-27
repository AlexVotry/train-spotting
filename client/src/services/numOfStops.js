import _ from 'lodash';

  function max(start, end, stops, routes) {
    let count = 0;
    for (let i = 2; i <= stops; i++) {
      count += exact(start, end, i, routes);
    }
    return count;
  }

  function exact(s, e, stops, routes) {
    let nextTrip = {};
    let ends = [];
    let start = s.toLowerCase();
    let end = e.toLowerCase();
    let starts = [];
    let counter = 2;
    let count = 0;

    let startEnd = _findStartEnd(start, end, routes);
    starts = startEnd.start;
    ends = startEnd.end;

    while (counter < stops) {
      counter += 2;
      nextTrip = _getNextTrip(starts, ends, stops, counter, routes);
      starts = nextTrip.starts;
      ends = nextTrip.ends;
    }

  _.forEach(starts, start => {
      if (ends.includes(start)) count++;
    });

    return count;
  }

function _findStartEnd(start, end, routes) {
    let starts = [];
    let ends = [];

    _.forEach(routes, route => {
      if (route.start === start) {
        starts.push(route.end);
      }
      if (route.end === end) {
        ends.push(route.start);
      }
    });

    return {start: starts, end: ends};
  }


  function _getNextTrip(starts, ends, stops, counter, routes) {
    let nextStart = [];
    let nextEnd = [];
    let begin = _.uniq(starts);
    let finish = _.uniq(ends);
    let len = begin.length >= finish.length ? begin.length : finish.length;

    _.forEach(routes, route => {
      for (let i = 0; i < len; i++) {
        if (route.start === begin[i]) {
          nextStart.push(route.end);
        };
        if (counter <= stops) {
          if (route.end === finish[i]) {
            nextEnd.push(route.start);
          }
        } else {
          nextEnd = ends;
        }
      }
    });

    return { starts: nextStart, ends: nextEnd };
  }

export default { max, exact };
