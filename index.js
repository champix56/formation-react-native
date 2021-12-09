/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App/App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './src/App/store/store';
import React from 'react';

AppRegistry.registerComponent(appName, () => ProvidedApp);

function ProvidedApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
