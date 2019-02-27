export default (state = [], action) => {
  switch (action.type) {
    case 'fetch_trains':
      return action.payload;
    default:
      return state;
  }
}
