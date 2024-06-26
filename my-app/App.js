// // App.js (or index.js)
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import Navigate from './Navigate'; // Your navigation component
// import { ThemeProvider } from './components/ThemeContext'; // Assuming this provides theme context

// const App = () => {
//   return (
//     <ThemeProvider>
//       <NavigationContainer>
//         <Navigate />
//       </NavigationContainer>
//     </ThemeProvider>
//   );
// };

// export default App;

// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import { ThemeProvider } from './components/ThemeContext';
import StatisticsScreen from './screens/StatisticsScreen';
import MyCardsScreen from './screens/MyCardsScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
          <Tab.Screen name = "Statistics" component= {StatisticsScreen}/>
          <Tab.Screen name = "My Cards" component= {MyCardsScreen}/>
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;