
import React, { useContext } from 'react';
import { View, FlatList, Text, StyleSheet, Image } from 'react-native';
import { ThemeContext } from './ThemeContext';

const TransactionHistory = () => {
  const { theme } = useContext(ThemeContext);
  const transactions = [
    {
      id: '1',
      title: 'Apple store',
      description: 'Entertainment',
      amount: -1200,
      logo: require('../assets/apple.png'), 
    },
    {
      id: '2',
      title: 'Spotify',
      description: 'Music',
      amount: -125.45,
      logo: require('../assets/spotify.png'), 
    },
    {
      id: '3',
      title: 'Money transfer',
      description: 'Transaction',
      amount: 3500,
      logo: require('../assets/moneyTransfer.png'), 
    },
    {
      id: '4',
      title: 'Grocery',
      description: 'Grocery list',
      amount: -75.99,
      logo: require('../assets/grocery.png'), 
    },
  ];

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={[styles.title, { color: theme.textColor }]}>Transaction History</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.transaction}>
            <Image source={item.logo} style={styles.logo} />
            <View style={styles.details}>
              <Text style={[styles.title1, { color: theme.textColor }]}>{item.title}</Text>
              <Text style={[styles.description, { color: theme.textColor }]}>
                {item.description}
              </Text>
            </View>
            <Text
              style={[
                styles.amount,
                { color: item.amount >= 0 ? '#4CAF50' : '#F44336' },
              ]}
            >
              {item.amount >= 0 ? '+' : '-'}${Math.abs(item.amount).toFixed(2)}
            </Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  transaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  logo: {
    width: 32,
    height: 32,
    marginRight: 16,
  },
  details: {
    flex: 1,
  },
  title1: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#999',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0',
  },
});

export default TransactionHistory;;