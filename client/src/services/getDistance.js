import _ from 'lodash';

export default (str, routes) => {
    const arr = str.replace(/[-]/g, '').toLowerCase().split('');
    let totalDistance = 0;
    let validRoutes = [];
    let route;

    for (let i = 0; i < arr.length - 1; i++) {
      const stop = _.find(routes, ({ 'start': arr[i], 'end': arr[i + 1] }));
      if (stop) {
        route = `${stop.start}${stop.end}`;
        validRoutes.push({ route, distance: stop.distance });
        totalDistance += stop.distance;
      } else {
        return {totalDistance: 'NO SUCH ROUTE'};
      }
    }
    return { totalDistance, validRoutes };
  };
