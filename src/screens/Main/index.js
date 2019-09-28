import React from 'react';
import Header from '../../components/Header';
import {View, StyleSheet} from 'react-native';
import ProductList from '../../components/ProductList';

const Main = () => (
  <>
    <Header />
    <View style={S.Container}>
      <ProductList />
    </View>
  </>
);

const S = StyleSheet.create({
  Container: {
    backgroundColor: '#191920',
    flex: 1,
    paddingLeft: 20,
    paddingVertical: 20,
  },
});

export default Main;
