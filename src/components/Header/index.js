import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {withNavigation} from 'react-navigation';

const Header = props => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Main')}>
          <Image
            source={require('../../assets/images/Logo.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Cart')}>
          <Icon name="shopping-basket" size={32} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#141419',
    color: '#fff',
  },
  header: {
    flexDirection: 'row',
    color: '#fff',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
});

export default withNavigation(Header);
