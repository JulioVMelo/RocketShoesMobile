import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
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
        <TouchableOpacity
          style={styles.containerBadge}
          onPress={() => props.navigation.navigate('Cart')}>
          <Icon name="shopping-basket" size={32} color="#fff" />
          <View style={styles.badge}>
            <Text style={styles.textBadge}>2</Text>
          </View>
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
  containerBadge: {
    position: 'relative',
  },
  badge: {
    backgroundColor: '#7159C1',
    width: 20,
    height: 20,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: -10,
    textAlign: 'center',
  },
  textBadge: {
    color: '#fff',
  },
});

export default withNavigation(Header);
