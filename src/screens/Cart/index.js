import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Header from '../../components/Header';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as CartActions from '../../store/ducks/cart';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {formatPrice} from '../../util/format';
class Cart extends Component {
  componentDidMount() {
    this.props.CartActions.listCart();
  }

  handleIncrementAmount(id) {
    this.props.CartActions.incrementAmount(id);
  }

  handleDecrementAmount(id) {
    let item = this.props.state.cart.filter(item => item.id === id);
    let itemAmount = item[0].amount;

    if (itemAmount > 1) {
      this.props.CartActions.decrementAmount(id);
    }
  }

  handleRemoveItem(id) {
    this.props.CartActions.removeItemToCart(id);
  }

  render() {
    const result = this.props.state.cart.map(cartItem =>
      this.props.state.products.find(
        productItem => cartItem.id === productItem.id,
      ),
    );

    return (
      <>
        <Header />
        <ScrollView style={S.Container}>
          <View style={S.Content}>
            {result.map((item, index) => (
              <View style={S.Card} key={item.id}>
                <View style={S.Info}>
                  <Image style={S.Image} source={{uri: `${item.image}`}} />
                  <View style={S.Text}>
                    <Text style={S.Title} numberOfLines={2}>
                      {item.name}
                    </Text>
                    <Text style={S.Price}>{formatPrice(item.price)}</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => this.handleRemoveItem(item.id)}>
                    <Icon name="highlight-off" size={26} color="#555" />
                  </TouchableOpacity>
                </View>
                <View style={S.Value}>
                  <View style={S.Actions}>
                    <TouchableOpacity
                      onPress={() =>
                        this.handleDecrementAmount(
                          this.props.state.cart[index].id,
                        )
                      }>
                      <Icon
                        name="remove-circle-outline"
                        size={26}
                        color={
                          this.props.state.cart[index].amount > 1
                            ? '#7159c1'
                            : '#ccc'
                        }
                      />
                    </TouchableOpacity>
                    <TextInput
                      style={S.Qtd}
                      value={`${this.props.state.cart[index].amount}`}
                      editable={false}
                    />
                    <TouchableOpacity
                      onPress={() =>
                        this.handleIncrementAmount(
                          this.props.state.cart[index].id,
                        )
                      }>
                      <Icon
                        name="add-circle-outline"
                        size={26}
                        color="#7159C1"
                      />
                    </TouchableOpacity>
                  </View>
                  <Text style={S.Price}>
                    {formatPrice(this.props.state.cart[index].subTotal)}
                  </Text>
                </View>
              </View>
            ))}

            <View style={S.Total}>
              <Text style={S.TitleTotal}>Total</Text>
              <Text style={S.PriceTotal}>
                {formatPrice(
                  this.props.state.cart.reduce(
                    (acc, item) => acc + item.subTotal,
                    0,
                  ),
                )}
              </Text>
            </View>

            <TouchableOpacity style={S.ButtonAdd}>
              <Text style={S.ButtonText}>FINALIZAR PEDIDO</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </>
    );
  }
}

const S = StyleSheet.create({
  Container: {
    backgroundColor: '#191920',
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  Content: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 60,
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
  Actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Qtd: {
    marginHorizontal: 10,
    backgroundColor: '#fff',
    width: 40,
    paddingVertical: 5,
    textAlign: 'center',
    color: '#7159C1',
    borderRadius: 4,
  },
});

const mapStateToProps = state => ({
  state,
});

function mapDispatchToProps(dispatch) {
  return {
    CartActions: bindActionCreators(CartActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
