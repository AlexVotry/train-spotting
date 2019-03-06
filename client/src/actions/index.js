import axios from 'axios';

export const fetchTrains = () => async dispatch => {
  const res = await axios.get('/api/trains');
  dispatch({ type: 'FETCH_TRAINS' , payload: res.data })
}
