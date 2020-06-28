var findItinerary = function (tickets) {
  const tracker = {};
  const current = ['JFK'];

  const traverse = (current, count, port = 'JFK') => {
    let options = [];
    if (count === tickets.length - 1) {
      console.log(tracker, port);
      current.push(port);
      return;
    } else {
      for (let i = 0; i < tickets.length; i++) {
        if (tickets[i][0] === port && !tracker.hasOwnProperty(i)) {
          options.push({ port: tickets[i][1], index: i });
        }
      }
      options.sort((a, b) => {
        console.log('com', a.port, b.port);
        return a.port > b.port ? 1 : -1;
      });
      console.log(options);
      tracker[options[0].index] = true;
      current.push(options[0].port);
      traverse(current, count + 1, options[0].port);
    }
  };
  traverse(current, 0);
  return current;
};

console.log(
  findItinerary([
    ['JFK', 'SFO'],
    ['JFK', 'ATL'],
    ['SFO', 'ATL'],
    ['ATL', 'JFK'],
    ['ATL', 'SFO'],
  ])
);
