import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Routes from '../routes';

const App = () => {
  return (
    <>
      <SafeAreaView style={{backgroundColor: '#141419'}} />
      <StatusBar barStyle="light-content" />
      <Routes />
    </>
  );
};

export default App;
