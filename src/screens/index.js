import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Routes from '../routes';
import {Provider} from 'react-redux';
import store from '../store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{backgroundColor: '#141419'}} />
      <StatusBar barStyle="light-content" />
      <Routes />
    </Provider>
  );
};

export default App;
