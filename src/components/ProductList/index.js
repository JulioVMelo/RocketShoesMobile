import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function ProductList() {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={S.Card}>
        <Image
          style={S.Image}
          source={require('../../assets/images/image_shoes.png')}
        />
        <Text style={S.Title}>Tênis de caminhada leve confortável</Text>
        <Text style={S.Price}>R$179,90</Text>
        <TouchableOpacity style={S.ButtonAdd}>
          <Text style={S.ButtonText}>ADICIONAR</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const S = StyleSheet.create({
  Card: {
    backgroundColor: '#fff',
    width: 220,
    height: 360,
    borderRadius: 10,
    padding: 10,
    marginRight: 15,
  },
  Image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  Title: {
    color: '#333',
    marginBottom: 10,
    fontSize: 16,
    fontWeight: '500',
  },
  Price: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 21,
    marginBottom: 15,
  },
  ButtonAdd: {
    backgroundColor: '#7159C1',
    borderRadius: 4,
    height: 42,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
