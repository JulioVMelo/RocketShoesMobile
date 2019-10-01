import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ProductActions from '../../store/ducks/products';
import * as CartActions from '../../store/ducks/cart';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddCart = this.handleAddCart.bind(this);
    // const {list} = props;
  }

  handleAddCart(id, price) {
    const listItemsDuplicates = this.props.state.cart.filter(
      itemCart => itemCart.id === id,
    );

    if (listItemsDuplicates.length === 0) {
      this.props.CartActions.addProductToCart(id, price);
    } else {
      this.props.CartActions.incrementAmount(id);
    }
  }

  render() {
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {this.props.list.map(item => (
          <View style={S.Card} key={item.id}>
            <Image style={S.Image} source={{uri: `${item.image}`}} />
            <Text style={S.Title} numberOfLines={2}>
              {item.name}
            </Text>
            <Text style={S.Price}>R$ {item.price}</Text>
            <TouchableOpacity
              style={S.ButtonAdd}
              onPress={() => this.handleAddCart(item.id, item.price)}>
              <Text style={S.ButtonText}>ADICIONAR</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    );
  }
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

const mapStateToProps = state => ({
  state,
});

function mapDispatchToProps(dispatch) {
  return {
    ProductActions: bindActionCreators(ProductActions, dispatch),
    CartActions: bindActionCreators(CartActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductList);
