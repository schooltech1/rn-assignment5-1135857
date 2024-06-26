
// screens/HomeScreen.js
import React, { useContext } from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { ThemeContext } from '../components/ThemeContext';

import TransactionHistory from '../components/TransactionHistory';
import Header from '../components/Header';

const HomeScreen = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ScrollView>
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Header />
      <View style={styles.cardContainer}>
        <Image source={require('../assets/Card.png')} style={styles.cardImage} />
      </View>

      <View style={styles.actionsContainer}>
        <View style={styles.actionItem}>
          <Image source={require('../assets/send.png')} style={styles.actionIcon} />
          <Text style={styles.actionText}>Send</Text>
        </View>
        <View style={styles.actionItem}>
          <Image source={require('../assets/moneyTransfer.png')} style={styles.actionIcon} />
          <Text style={styles.actionText}>Receive</Text>
        </View>
        <View style={styles.actionItem}>
          <Image source={require('../assets/loan.png')} style={styles.actionIcon} />
          <Text style={styles.actionText}>Loan</Text>
        </View>
        <View style={styles.actionItem}>
          <Image source={require('../assets/topUp.png')} style={styles.actionIcon} />
          <Text style={styles.actionText}>Topup</Text>
        </View>
      </View>
      <TransactionHistory />
    </View>
    <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../assets/home.png')} style={styles.navIcon} />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../assets/myCards.png')} style={styles.navIcon} />
          <Text style={styles.navText}>My Cards</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../assets/statictics.png')} style={styles.navIcon} />
          <Text style={styles.navText}>Statistics</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../assets/settings.png')} style={styles.navIcon} />
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  cardContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
  cardImage: {
    width: '90%',
    height: 350,
    resizeMode: 'contain',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    width: '100%',
    paddingHorizontal: 20,
  },
  actionItem: {
    alignItems: 'center',
  },
  actionIcon: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  actionText: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  navText: {
    fontSize: 12,
    color: '#666',
  },
});

export default HomeScreen;