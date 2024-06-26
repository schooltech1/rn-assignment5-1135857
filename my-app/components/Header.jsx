// components/Header.js
import React, { useContext } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { ThemeContext } from './ThemeContext';

const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    
    <View style={[styles.header, {backgroundColor: theme.backgroundColor}]}>
        <View style={styles.profileSection}>
          <Image source={require('../assets/profile.png')} style={styles.profileImage} />
          <View style={[styles.userInfo,{color: theme.textColor}]}>
            <Text style={styles.welcomeText}>Welcome back,</Text>
            <Text style={styles.userName}>Eric Atsu</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Image source={require('../assets/search.png')} style={styles.searchIcon} />
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  userInfo: {
    flexDirection: 'column',
  },
  welcomeText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 4,
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
});

export default Header;