
const stops = (states) => {
  const inputs = [
    {
      name: 'start',
      label: 'Starting Depot'
    },
    {
      name: 'end',
      label: 'Ending Depot'
    },
    {
      name: 'stops',
      label: 'Amount of Stops'
    }
  ]

  while (inputs.length > states.length) {
    inputs.pop();
  }

  for (var i = 0; i < states.length; i++) {
    inputs[i].value = states[i];
  }
  return inputs;
};

const max = (states) => {
  const inputs = [
    {
      name: 'start',
      label: 'Starting Depot'
    },
    {
      name: 'end',
      label: 'Ending Depot'
    },
    {
      name: 'maxDist',
      label: 'Maximum distance'
    }
  ]
  for (var i = 0; i < states.length; i++) {
    inputs[i].value = states[i];
  }
  return inputs;
};

export default { stops, max };
