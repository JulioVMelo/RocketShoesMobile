import React from 'react';
import Header from '../../components/Header';
import {View, StyleSheet} from 'react-native';
import ProductList from '../../components/ProductList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ProductActions from '../../store/ducks/products';
import * as CartActions from '../../store/ducks/cart';

class Main extends React.Component {
  componentDidMount() {
    this.props.ProductActions.asyncListProducts();
  }

  render() {
    return (
      <>
        <Header qtdItems={this.props.state.cart.length} />
        <View style={S.Container}>
          <ProductList list={this.props.state.products} />
        </View>
      </>
    );
  }
}

const S = StyleSheet.create({
  Container: {
    backgroundColor: '#191920',
    flex: 1,
    paddingLeft: 20,
    paddingVertical: 20,
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
)(Main);
