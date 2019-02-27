import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../../reducers';
import ReduxThunk from 'redux-thunk';
import App from './index';


it('renders without crashing', () => {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  const div = document.createElement('div');
  ReactDOM.render(  <Provider store={store}><App/></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
