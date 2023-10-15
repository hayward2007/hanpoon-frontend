import React from 'react';
import Home from './Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Analysis from './Analysis';
import Search from './Search';
import All from './All';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
          animation: 'fade',
          animationDuration: 200,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Analysis" component={Analysis} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="All" component={All} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
