import _ from 'lodash';

export default (str, routes) => {
    const arr = str.replace(/[-]/g, '').toLowerCase().split('');
    let totalDistance = 0;

    for (let i = 0; i < arr.length - 1; i++) {
      const stop = _.find(routes, ({ 'start': arr[i], 'end': arr[i + 1] }));
      if (stop) {
        totalDistance += stop.distance;
      } else {
        return totalDistance = 'NO SUCH ROUTE';
      }
    }
    return `The total distance is ${totalDistance} miles`;
  };
