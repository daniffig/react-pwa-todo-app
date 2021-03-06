import React from 'react';
import { render } from 'react-dom';
import './index.css';
// import App from './App';
import HttpsApp from './HttpsApp';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';

import { createStore } from 'redux';

// import { persistor, store } from './store';


import rootReducer from './reducers';

import 'typeface-roboto';

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
      {/* <App />     */}
      <HttpsApp />    
    {/* </PersistGate> */}
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register();
