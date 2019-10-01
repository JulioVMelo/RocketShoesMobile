import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Header from '../../components/Header';

const Cart = () => (
  <>
    <Header />
    <View style={S.Container}>
      <View style={S.Content}>
        <View style={S.Card}>
          <View style={S.Info}>
            <Image
              style={S.Image}
              source={require('../../assets/images/image_shoes.png')}
            />
            <View style={S.Text}>
              <Text style={S.Title} numberOfLines={2}>
                Tênis maneiro pra caramba tio na moral
              </Text>
              <Text style={S.Price}>R$ 200,00</Text>
            </View>
          </View>
          <View style={S.Value}>
            <Text style={S.Qtd}>2</Text>
            <Text style={S.Price}>R$ 200,00</Text>
          </View>
        </View>
        <View style={S.Card}>
          <View style={S.Info}>
            <Image
              style={S.Image}
              source={require('../../assets/images/image_shoes.png')}
            />
            <View style={S.Text}>
              <Text style={S.Title} numberOfLines={2}>
                Tênis maneiro pra caramba tio na moral
              </Text>
              <Text style={S.Price}>R$ 200,00</Text>
            </View>
          </View>
          <View style={S.Value}>
            <Text style={S.Qtd}>2</Text>
            <Text style={S.Price}>R$ 200,00</Text>
          </View>
        </View>
        <View style={S.Card}>
          <View style={S.Info}>
            <Image
              style={S.Image}
              source={require('../../assets/images/image_shoes.png')}
            />
            <View style={S.Text}>
              <Text style={S.Title} numberOfLines={2}>
                Tênis maneiro pra caramba tio na moral
              </Text>
              <Text style={S.Price}>R$ 200,00</Text>
            </View>
          </View>
          <View style={S.Value}>
            <Text style={S.Qtd}>2</Text>
            <Text style={S.Price}>R$ 200,00</Text>
          </View>
        </View>
        <View style={S.Total}>
          <Text style={S.TitleTotal}>Total</Text>
          <Text style={S.PriceTotal}>R$ 200,00</Text>
        </View>
        <TouchableOpacity style={S.ButtonAdd}>
          <Text style={S.ButtonText}>FINALIZAR PEDIDO</Text>
        </TouchableOpacity>
      </View>
    </View>
  </>
);

const S = StyleSheet.create({
  Container: {
    backgroundColor: '#191920',
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  Content: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
  },
  Card: {
    marginBottom: 10,
  },
  Info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  Text: {
    fontSize: 14,
    marginBottom: 5,
    flex: 1,
  },
  Price: {
    fontWeight: '600',
    fontSize: 16,
  },
  Value: {
    backgroundColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    paddingHorizontal: 15,
    borderRadius: 4,
  },
  Total: {
    marginTop: 25,
    alignItems: 'center',
  },
  TitleTotal: {
    fontWeight: '600',
    color: '#999',
    fontSize: 16,
    textTransform: 'uppercase',
    marginBottom: 5,
  },
  PriceTotal: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 30,
  },
  ButtonAdd: {
    backgroundColor: '#7159C1',
    borderRadius: 4,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
export default Cart;
