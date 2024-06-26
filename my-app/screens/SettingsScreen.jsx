
// screens/SettingsScreen.js
import React, { useContext } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { ThemeContext } from '../components/ThemeContext';

const SettingsScreen = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <View style={styles.settingItem}>
        <Text style={[styles.settingLabel, { color: theme.textColor }]}>Theme</Text>
        <Switch value={theme.dark} onValueChange={toggleTheme} />
      </View>
      <View style={styles.settingItem}>
        <Text style={[styles.settingLabel, { color: theme.textColor }]}>Language</Text>
        <Text style={[styles.settingValue, { color: theme.textColor }]}>English</Text>
      </View>
      <View  style={styles.settingItem}>
        <Text style={[styles.settingLabel, { color: theme.textColor }]}>Contact Us</Text>
      </View>
      <View  style={styles.settingItem}>
        <Text style={[styles.settingLabel, { color: theme.textColor }]}>Profile</Text>
      </View>
      <View  style={styles.settingItem}>
        <Text style={[styles.settingLabel, { color: theme.textColor }]}>Change Password</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  settingLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  settingValue: {
    fontSize: 16,
  },
});

export default SettingsScreen;