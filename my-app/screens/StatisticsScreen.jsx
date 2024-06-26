
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from '../components/ThemeContext';

const StatisticsScreen = () => {
    const { theme } = useContext(ThemeContext);
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Statistics Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
    },
});

export default StatisticsScreen;
