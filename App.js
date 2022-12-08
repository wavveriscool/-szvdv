import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import FootBallScreen from "./screens/Football";
import SoccerScreen from "./screens/Soccer";
import CricketScreen from "./screens/Cricket";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FootBall" component={FootBallScreen} />
        <Stack.Screen name="Soccer" component={SoccerScreen} />
        <Stack.Screen name="Cricket" component={CricketScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;