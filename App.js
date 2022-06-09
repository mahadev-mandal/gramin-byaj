// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import GraminByaj from './screens/GraminByaj';
import Loan from './screens/Loan';
import Simple from './screens/Simple';
import Compound from './screens/Compound';
import Home from './screens/Home';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home" component={Home}
        />
        <Stack.Screen
          name="Gramin"
          component={GraminByaj}
          options={{title:'Gramin Byaj'}}
        />
        <Stack.Screen
          name="Simple"
          component={Simple}
          options={{title:'Simple Interest'}}
        />
        <Stack.Screen
          name="Compound"
          component={Compound}
          options={{title:'Compound Interest'}}
        />
        <Stack.Screen
          name="Loan"
          component={Loan}
          options={{title:'Loan Calculator'}}
        />
      </Stack.Navigator>
      <View style={{ flexDirection: 'row', marginTop: 20, padding: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Developer:</Text>
        <Text style={{ fontStyle: 'italic' }}> Mahadev mandal</Text>
      </View>
    </NavigationContainer>
  );
}
export default App;