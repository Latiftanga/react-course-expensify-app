import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configStore from './store/configStore';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = configStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
