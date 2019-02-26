import axios from 'axios';

export const fetchTrains = () => async dispatch => {
  const res = await axios.get('/api/trains');
  dispatch({ type: 'fetch_trains' , payload: res.data })
}
